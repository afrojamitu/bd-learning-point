import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Pageloader from "../layouts/PageLoader.jsx";
import Success from "./Success.jsx";
import { useMutation, useQuery } from "react-query";
import { getRegister, postRegister } from "../../../hooks/auth/authApi.js";
import { toast } from "react-hot-toast";
import signUp2 from '../../../assets/auth/sign-up-2.svg'


const Signup = () => {
  const [data, setData] = useState([]);

  const params = useParams();
  const Id = params?.Id;
  const { data: registerInfo } = useQuery("", getRegister, {
    onSuccess: (response) => {
      setData(response?.data?.data);
    },
  });

  const { isLoading: submitLoading, mutate } = useMutation(postRegister, {
    onSuccess: () => {
      toast.success("Register is Successful. Please Login.");
      setSuccessRegister(true);
    },
    onError: (error) => {
      setIsSubmitting(false);
      if (error.response.data.error) {
        toast.error(error.response.data.error);
      } else {
        toast.error("something went wrong");
      }
    },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successRegister, setSuccessRegister] = useState(false);
  const navigate = useNavigate();

  const [isPassShow, setIsPassShow] = useState(false);

  const handlePasswrodShow = () => {
    if (isPassShow == false) {
      document.getElementById("newPassword").type = "text";
      setIsPassShow(true);
    } else {
      document.getElementById("newPassword").type = "password";
      setIsPassShow(false);
    }
  };

  useEffect(() => {
    const UserCheck = () => {
      const token = localStorage.getItem("token");
      const user = localStorage.getItem("user");

      if (token && user) {
        navigate("/");
      }
    };

    UserCheck();

    if (Id) {
      setFormData((prevData) => ({
        ...prevData,
        ["referenceNo"]: Id,
      }));
    }
  }, [navigate, Id]);

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    language: "",
    country: "",
    whatsappNo: "",
    // phoneNo: "",
    gmailAddress: "",
    newPassword: "",
    referenceNo: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateStep1 = () => {
    if (formData.firstName.trim() === "") {
      toast.error("First Name is required");
      return false;
    }

    if (formData.lastName.trim() === "") {
      toast.error("Last Name is required");
      return false;
    }

    if (formData.language === "") {
      toast.error("Language is required");
      return false;
    }

    return true;
  };

  const validateStep2 = () => {
    if (formData.country === "") {
      toast.error("Country is required");
      return false;
    }

    if (formData.whatsappNo.trim() === "") {
      toast.error("WhatsApp No is required");
      return false;
    }

    if (formData.gmailAddress.trim() === "") {
      toast.error("Gmail Address is required");
      return false;
    }

    if (formData.newPassword.trim() === "") {
      toast.error("New Password is required");
      return false;
    }

    if (formData.referenceNo.trim() === "") {
      toast.error("Reference No is required");
      return false;
    }

    // if (formData.phoneNo.trim() === "") {
    //   toast.error("Phone No is required");
    //   return false;
    // }
    return true;
  };

  // const validateStep3 = () => {
  //   toast.dismiss();

  //   if (formData.gmailAddress.trim() === "") {
  //     toast.error("Gmail Address is required");
  //     return false;
  //   }

  //   if (formData.newPassword.trim() === "") {
  //     toast.error("New Password is required");
  //     return false;
  //   }

  //   if (formData.referenceNo.trim() === "") {
  //     toast.error("Reference No is required");
  //     return false;
  //   }
  //   return true;
  // };

  const [step1Bg, setsetp1Bg] = useState(true);
  const [step2Bg, setsetp2Bg] = useState(false);
  // const [step3Bg, setsetp3Bg] = useState(false);

  const handleNext = () => {
    let isValid = true;

    switch (step) {
      case 1:
        isValid = validateStep1();
        setsetp2Bg(true);
        break;
      case 2:
        isValid = validateStep2();
        setsetp1Bg(true);
        break;
      // case 3:
      //   isValid = validateStep3();
      //   break;
      default:
        break;
    }

    if (isValid) {
      setStep((prevStep) => prevStep + 1);
      switch (step) {
        case 1:
          setsetp1Bg(true);
          break;
        case 2:
          setsetp2Bg(true);
          break;
        // case 3:
        //   setsetp3Bg(true);
        //   break;
        default:
          break;
      }
    } else {
      switch (step) {
        case 1:
          setsetp1Bg(false);
          break;
        case 2:
          setsetp2Bg(false);
          break;
        // case 3:
        //   setsetp3Bg(false);
        //   break;
        default:
          break;
      }
    }
  };

  const handlePrevious = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Prepare the data to be sent
    toast.dismiss();

    const isValid = validateStep2();

    if (!isValid) {
      return;
    }

    const userData = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.gmailAddress,
      password: formData.newPassword,
      area_code: formData.country,
      mobile_number: formData.whatsappNo,
      referral_code: formData.referenceNo,
    };

    setIsSubmitting(true);
    setsetp1Bg(false);
    setsetp2Bg(false);
    // setsetp3Bg(false);

    if (!submitLoading) {
      mutate({
        formdata: userData,
      });
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="mt-10">
            <div className="max-w-md mx-auto">
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="firstName"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 rounded-lg border ${"border-gray-300 focus:ring-blue-500 focus:border-blue-500"}`}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="lastName"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 rounded-lg border ${"border-gray-300 focus:ring-blue-500 focus:border-blue-500"}`}
                    required
                  />
                </div>
                
                
                <div className="mb-4">
                  <label
                    htmlFor="language"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Language
                  </label>
                  <select
                    id="language"
                    name="language"
                    value={formData.language}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 rounded-lg border ${"border-gray-300 focus:ring-blue-500 focus:border-blue-500"}`}
                    required
                  >
                    <option value="">Select Language</option>
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                    <option value="Arabic">Arabic</option>
                  </select>
                </div>
                <div className="mb-4">
                <label
                  htmlFor="gmailAddress"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Gmail Address
                </label>
                <input
                  type="email"
                  id="gmailAddress"
                  name="gmailAddress"
                  value={formData.gmailAddress}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 rounded-lg border ${"border-gray-300 focus:ring-blue-500 focus:border-blue-500"}`}
                  required
                />
              </div>
                <button
                  type="button"
                  className="px-6 py-2 bg-[#442E9E] text-white font-medium rounded-lg hover:bg-blue-600"
                  onClick={handleNext}
                >
                  Next
                </button>
              </form>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit}>
            <div className="mb-4">
                  <label
                    htmlFor="country"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 rounded-lg border ${"border-gray-300 focus:ring-blue-500 focus:border-blue-500"}`}
                    required
                  >
                    <option value="" data-phone_code="">
                      Select Country
                    </option>
                    {registerInfo?.data?.data?.length != 0 &&
                      registerInfo?.data?.data.map((country, key) => (
                        <option
                          key={key}
                          value={country.phonecode}
                          data-phone_code={country.phonecode}
                        >
                          {country?.phonecode} {country.country_name}
                        </option>
                      ))}
                  </select>
                </div>
              <div className="mb-4">
                <label
                  htmlFor="whatsappNo"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Whatsapp No
                </label>
                <div className="flex items-center">
                  <span
                    id="w_phonecode"
                    className="w-12 h-10 px-2 mr-2 py-2 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {formData?.country}
                  </span>
                  <input
                    type="text"
                    id="whatsappNo"
                    name="whatsappNo"
                    value={formData.whatsappNo}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 rounded-lg border ${"border-gray-300 focus:ring-blue-500 focus:border-blue-500"}`}
                    required
                  />
                </div>
              </div>
              
              <div className="mb-4 relative">
                <label
                  htmlFor="newPassword"
                  className="block text-gray-700 font-medium mb-2"
                >
                  New Password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 rounded-lg border ${"border-gray-300 focus:ring-blue-500 focus:border-blue-500"}`}
                  required
                />
                {isPassShow == false ? (
                  <button
                    onClick={handlePasswrodShow}
                    type="button"
                    className="absolute top-10 right-4"
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </span>
                  </button>
                ) : (
                  <button
                    onClick={handlePasswrodShow}
                    type="button"
                    className="absolute top-10 right-4"
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    </span>
                  </button>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="referenceNo"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Reference No
                </label>
                <input
                  type="text"
                  id="referenceNo"
                  name="referenceNo"
                  value={formData.referenceNo}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 rounded-lg border ${"border-gray-300 focus:ring-blue-500 focus:border-blue-500"}`}
                  required
                />
              </div>
              {/* <div className="mb-4">
                <label
                  htmlFor="phoneNo"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Phone No
                </label>
                <div className="flex items-center">
                  <span
                    id="m_phonecode"
                    className="w-12 h-10 px-2 mr-2 py-2 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {formData?.country}
                  </span>
                  <input
                    type="text"
                    id="phoneNo"
                    name="phoneNo"
                    value={formData.phoneNo}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 rounded-lg border ${"border-gray-300 focus:ring-blue-500 focus:border-blue-500"}`}
                    required
                  />
                </div>
              </div> */}
              <button
                type="button"
                className="px-6 py-2 bg-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-400 mr-2"
                onClick={handlePrevious}
              >
                Back
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-[#442E9E] text-white font-medium rounded-lg hover:bg-blue-600"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        );
      // case 3:
      //   return (
      //     <div className="max-w-md mx-auto">
      //       <form onSubmit={handleSubmit}>
              // <div className="mb-4">
              //   <label
              //     htmlFor="gmailAddress"
              //     className="block text-gray-700 font-medium mb-2"
              //   >
              //     Gmail Address
              //   </label>
              //   <input
              //     type="email"
              //     id="gmailAddress"
              //     name="gmailAddress"
              //     value={formData.gmailAddress}
              //     onChange={handleInputChange}
              //     className={`w-full px-4 py-2 rounded-lg border ${"border-gray-300 focus:ring-blue-500 focus:border-blue-500"}`}
              //     required
              //   />
              // </div>
              // <div className="mb-4 relative">
              //   <label
              //     htmlFor="newPassword"
              //     className="block text-gray-700 font-medium mb-2"
              //   >
              //     New Password
              //   </label>
              //   <input
              //     type="password"
              //     id="newPassword"
              //     name="newPassword"
              //     value={formData.newPassword}
              //     onChange={handleInputChange}
              //     className={`w-full px-4 py-2 rounded-lg border ${"border-gray-300 focus:ring-blue-500 focus:border-blue-500"}`}
              //     required
              //   />
              //   {isPassShow == false ? (
              //     <button
              //       onClick={handlePasswrodShow}
              //       type="button"
              //       className="absolute top-10 right-4"
              //     >
              //       <span>
              //         <svg
              //           xmlns="http://www.w3.org/2000/svg"
              //           fill="none"
              //           viewBox="0 0 24 24"
              //           strokeWidth={1.5}
              //           stroke="currentColor"
              //           className="w-6 h-6"
              //         >
              //           <path
              //             strokeLinecap="round"
              //             strokeLinejoin="round"
              //             d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              //           />
              //           <path
              //             strokeLinecap="round"
              //             strokeLinejoin="round"
              //             d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              //           />
              //         </svg>
              //       </span>
              //     </button>
              //   ) : (
              //     <button
              //       onClick={handlePasswrodShow}
              //       type="button"
              //       className="absolute top-10 right-4"
              //     >
              //       <span>
              //         <svg
              //           xmlns="http://www.w3.org/2000/svg"
              //           fill="none"
              //           viewBox="0 0 24 24"
              //           strokeWidth={1.5}
              //           stroke="currentColor"
              //           className="w-6 h-6"
              //         >
              //           <path
              //             strokeLinecap="round"
              //             strokeLinejoin="round"
              //             d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
              //           />
              //         </svg>
              //       </span>
              //     </button>
              //   )}
              // </div>
              // <div className="mb-4">
              //   <label
              //     htmlFor="referenceNo"
              //     className="block text-gray-700 font-medium mb-2"
              //   >
              //     Reference No
              //   </label>
              //   <input
              //     type="text"
              //     id="referenceNo"
              //     name="referenceNo"
              //     value={formData.referenceNo}
              //     onChange={handleInputChange}
              //     className={`w-full px-4 py-2 rounded-lg border ${"border-gray-300 focus:ring-blue-500 focus:border-blue-500"}`}
              //     required
              //   />
              // </div>
              // <button
              //   type="button"
              //   className="px-6 py-2 bg-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-400 mr-2"
              //   onClick={handlePrevious}
              // >
              //   Back
              // </button>
              //  <button
              //   type="submit"
              //   className="px-6 py-2 bg-[#442E9E] text-white font-medium rounded-lg hover:bg-blue-600"
              // >
              //   {isSubmitting ? "Submitting..." : "Submit"}
              // </button> 
        //     </form>
        //   </div>
        // );
      default:
        return null;
    }
  };

  if (!data) {
    return <Pageloader title="Sign Up" />;
  }


  return successRegister ? (
    <Success
      user={{
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.gmailAddress,
        password: formData.newPassword,
        area_code: formData.country == "bangladesh" ? "88" : "91",
        mobile_number: formData.phoneNo,
        referral_code: formData.referenceNo,
      }}
    />
  ) : (
    <>
      <div className="signup-section md:w-10/12 md:mx-auto grid lg:grid-cols-2 gap-10 py-20">
        <div className="hidden lg:block bg-[#442E9E] pt-10 my-10 rounded">
          <div className="flex justify-center items-center flex-col mb-3">
            <h2 className="text-4xl text-white font-semibold pb-7 text-center ">
              Signup Today and Learn More
            </h2>
            <img className="h-[500px] w-full" src={signUp2} alt="" />
          </div>
        </div>

        <div>
          <div className="flex justify-center rounded items-center my-10 mx-5" style={{ boxShadow: '0 0 30px #ccc' }}>
            <div className="md:mx-auto grid w-full">
              <div className="bg-white rounded-lg shadow-lg">
                <div className="signup_section flex justify-between mb-16 text-center font-semibold">
                  <span
                    className={`py-3 px-5 w-1/2  ${step1Bg
                      ? "bg-[#442E9E] text-white"
                      : "bg-[#ddd] text-black"
                      }`}
                  >
                    Personal Information
                  </span>
                  <span
                    className={`py-3 px-5 w-1/2  ${step2Bg
                      ? "bg-[#442E9E] text-white"
                      : "bg-[#ddd] text-black"
                      }`}
                  >
                    Account Information
                  </span>
                  {/* <span
                    className={`py-3 px-5 w-1/3  ${step3Bg
                      ? "bg-[#442E9E] text-white"
                      : "bg-[#ddd] text-black"
                      }`}
                  >
                    Account Information
                  </span> */}
                </div>
                <div className="p-10 pt-0">{renderStepContent()}</div>
                <div className="text-center text-lg pb-10">
                  I already have an account.{" "}
                  <Link
                    to="/login"
                    className="text-blue-500 hover:text-blue-700 font-medium"
                  >
                    Login Here
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
