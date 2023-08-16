import user_image from "../../assets/user_image.png";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { AES } from "crypto-js";
// import CryptoJS from "crypto-js";
import Breadcrumb from "../layouts/Breadcrumb";
import { dateformat } from "../../helpers/helper.js";
import { useQuery } from "react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import { Loader } from "@mantine/core";
import DeleteModal from "../../components/DeleteModal";
import TrashIcon from "../../components/Icons/TrashIcon";
import { deleteTrainer, getTrainers } from "../../hooks/admin/trainerApi";
import { BASE_ASSETS_URL } from "../../config/basic";

const AllTrainers = () => {
  const [search_string, setSearchString] = useState(false);
  const [count, setCount] = useState(25);
  const increase = 25;
  const colSpan = 10;
  const {
    data: trainers,
    isLoading,
    isError,
    isFetching,
    error,
    refetch,
  } = useQuery("getTrainers", () => getTrainers({ count, search_string }));

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const luser = localStorage.getItem("user");

    // let decryptedToken = "";
    // Decrypt the user object
    if (token && luser) {
      // decryptedToken = AES.decrypt(token, "token-secret-key").toString(
      //   CryptoJS.enc.Utf8
      // );
      // const decryptedUser = AES.decrypt(luser, "user-secret-key").toString(
      //   CryptoJS.enc.Utf8
      // );
      // setCtoken(decryptedToken);
      // setCUser(JSON.parse(decryptedUser));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    refetch();
  }, [count, refetch, search_string]);
  let content = null;
  if (isLoading)
    content = (
      <tr className="border-b section-bg">
        <td colSpan={colSpan} className="text-center text-white">
          <div className="text-center flex justify-center items-center my-6">
            <Loader color="white" size="lg" variant="dots" />
          </div>
        </td>
      </tr>
    );

  if (!isLoading && isError)
    content = (
      <tr className="border-b section-bg">
        <td
          colSpan={colSpan}
          className="text-center text-white py-6"
        >{`${error?.error}`}</td>
      </tr>
    );

  if (!isLoading && trainers?.data?.data?.instructors?.length === 0)
    content = (
      <tr className="border-b section-bg">
        <td colSpan={colSpan} className="text-center text-white py-6">
          No Trainers Found!
        </td>
      </tr>
    );

  if (!isLoading && trainers?.data?.data?.instructors?.length > 0)
    content = trainers?.data?.data?.instructors?.map((trainer, key) => (
      <tr
        key={key + 1}
        className="section-bg border-b dark:text-white"
      >
        <td data-label={"Serial"} className="px-6 py-4">
          {key + 1}
        </td>
        <td data-label={"Image"} className="px-6 py-4">
          <p className="flex justify-end">
            <img
              className="w-10"
              src={
                trainer?.user?.image
                  ? `${BASE_ASSETS_URL}${trainer?.user?.image}`
                  : user_image
              }
            />
          </p>
        </td>
        <td data-label={""} className="px-6 py-4">
          <p className="font-bold block md:hidden">Details</p> <br />
          Trainer ID: {trainer?.user?.referral_code}
          <br />
          Name: {trainer?.user?.name}
          <br />
          Email: {trainer?.user?.email}
          <br />
          Phone: {trainer?.user?.phone_number}
          <br />
          Join Date:{" "}
          {trainer?.created_at
            ? new Date(trainer?.created_at).toLocaleString()
            : ""}
          <br />
          <p className="mt-4">
            <a
              href={`https://api.whatsapp.com/send?phone=${trainer?.user?.area_code}${trainer?.user?.mobile_number}`}
              className="bg-purple-500 text-white p-2 rounded-lg"
              target="_blank"
              rel="noreferrer"
            >
              Whatsapp
            </a>
          </p>
          <br />
        </td>
        <td data-label={"Professional Title"} className="px-6 py-4">
          {trainer?.professional_title}
        </td>
        <td data-label={"Address"} className="px-6 py-4">
          {trainer?.address}
        </td>
        <td data-label={"Gender"} className="px-6 py-4">
          {trainer?.gender}
        </td>
        <td data-label={"About Me"} className="px-6 py-4">
          {trainer?.about_me}
        </td>
        <td data-label={"Status"} className="px-6 py-4">
          {trainer?.status == 0
            ? "Pending"
            : trainer?.status == 1
            ? "Approved"
            : "Blocked"}
        </td>
        <td data-label={"Date"} className="px-6 py-4">
          {dateformat(trainer?.created_at)}
        </td>
        <td data-label={"Action"} className="px-6 py-4">
          <div className="flex items-center justify-end gap-2">
            <Link
              to={`/admin/trainer/${trainer?.uuid}`}
              className="font-medium text-blue-600 dark:text-white hover:underline"
            >
              Edit
            </Link>
            <DeleteModal
              buttonText={<TrashIcon />}
              mutationFn={deleteTrainer}
              deleteId={trainer?.uuid}
              refetchFn={refetch}
            />
          </div>
        </td>
      </tr>
    ));

  return (
    <>
      <Breadcrumb title="All Trainers" />
      <div className="container mx-auto my-5 p-5">
        <div className="my-4">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              onChange={(e) => {
                setSearchString(e.target.value);
              }}
              className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gradient-to-r dark:from-[#070c44] dark:to-[#422e9d] dark:border-[#422e9d] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search By Refferal Code Or Phone Number"
            />
          </div>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg section-bg p-2">
          <InfiniteScroll
            dataLength={
              trainers?.data?.data?.instructors?.length
                ? trainers?.data?.data?.instructors?.length
                : 0
            }
            next={() => {
              setCount((prev) => prev + increase);
            }}
            hasMore={trainers?.data?.data?.instructors?.length == count}
          >
            <table className="border-collapse border border-slate-500 w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-white text-black">
                <tr>
                  <th scope="col" className="p-4">
                    Serial
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Image
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Details
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Professional Title
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Address
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Gender
                  </th>
                  <th scope="col" className="px-6 py-3">
                    About Me
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>{content}</tbody>
            </table>
          </InfiniteScroll>
          {isFetching && (
            <div className="text-center flex justify-center items-center my-6">
              <Loader color="white" size="lg" variant="dots" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default AllTrainers;
