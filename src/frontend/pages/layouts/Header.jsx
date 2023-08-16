import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AES } from "crypto-js";
import CryptoJS from "crypto-js";
import Logo from "../../../assets/header/logo.png";
import MobileHome from "../../../assets/header/mobile-home.svg";
// import MobileBook from "../../../assets/header/mobile-book-open.svg";
import MobileAbout from "../../../assets/header/mobile-about.svg";
import MobileContact from "../../../assets/header/mobile-contact.svg";
import MobileLogin from "../../../assets/header/mobile-login.svg";
import MobileLogout from "../../../assets/header/logout.png";
import NotificationsList from "../../../components/common/NotificationsModal";

const Header = () => {
  const [user, setUser] = useState({});
  const [token, settoken] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isnavShow, setIsnavShow] = useState(false);
  // const [isnavFix, setIsnavFix] = useState(false);
  const windowWidth = window.innerWidth;
  const navigate = useNavigate();

  const handleToggle = () => {
    if (isnavShow == true) {
      setIsnavShow(false);
    } else {
      setIsnavShow(true);
    }
  };

  useEffect(() => {
    const ltoken = localStorage.getItem("token");
    const luser = localStorage.getItem("user");

    // Decrypt the user object
    if (token && luser) {
      const decryptedToken = AES.decrypt(ltoken, "token-secret-key").toString(
        CryptoJS.enc.Utf8
      );
      const decryptedUser = AES.decrypt(luser, "user-secret-key").toString(
        CryptoJS.enc.Utf8
      );

      //  if(decryptedUser.role == 3 || decryptedUser.role == 2){
      settoken(decryptedToken);
      setUser(JSON.parse(decryptedUser));
      setIsLoggedIn(true);
      //}
    }
  }, [token, navigate]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 1) {
  //       setIsnavFix(true);
  //     } else {
  //       setIsnavFix(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);



  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsnavShow(false);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <header
        className='fixed z-20 flex justify-between items-center w-full bg-black py-3'
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <NavLink to="/" className="flex jusify-center items-center">
            <img
              className={`w-12 h-12 ${token && user && isLoggedIn
                ? ""
                : "mx-auto md:mx-0 mb-4 md:mb-0"
                }`}
              src={Logo}
              alt="Logo"
            />
            <span className="hidden md:block text-white font-bold ml-2">
              BDLearningPoint
            </span>
          </NavLink>
          <nav className="hidden sm:hidden lg:block">
            <ul className="flex space-x-4">
              <li>
                <NavLink
                  onClick={scrollToTop}
                  to="/"
                  className="text-white hover:text-gray-300"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={scrollToTop}
                  to="/about"
                  className="text-white hover:text-gray-300"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={scrollToTop}
                  to="/contact"
                  className="text-white hover:text-gray-300"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
          {token && user && isLoggedIn ? (
            <div>
              {windowWidth > 1024 ? (
                <div className="hidden lg:flex gap-8 justify-center items-center text-white font-bold hover:text-gray-300">
                  <div>
                    {token && user && isLoggedIn && (
                      <NotificationsList
                        bodyClass={`bg-gray-100 text-black`}
                        classes={`w-8 h-8 text-gray-1000 dark:text-white cursor-pointer`}
                        white={true}
                      />
                    )}
                  </div>

                  <NavLink
                    onClick={scrollToTop}
                    to="/student/dashboard"
                    className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 mr-2 rounded"
                  >
                    Dashboard
                  </NavLink>
                  <NavLink
                    onClick={handleLogout}
                    className="bg-gradient-to-r hover:from-green-400 hover:to-blue-500 from-pink-500 to-yellow-500 text-white font-bold py-2 px-4 rounded"
                  >
                    Logout
                  </NavLink>
                </div>
              ) : (
                <div className="block lg:hidden">
                  <button onClick={handleToggle}>
                    <div className="w-10 h-1 bg-white mb-2"></div>
                    <div className="w-10 h-1 bg-white mb-2"></div>
                    <div className="w-10 h-1 bg-white"></div>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <div className="hidden lg:block flex justify-center items-center">
                <NavLink
                  to={"/subadmin/login"}
                  className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 mr-2 rounded"
                >
                  SubAdmin Login
                </NavLink>
                <NavLink
                  to="/admin/login"
                  className="bg-gradient-to-r hover:from-green-400 hover:to-blue-500 from-pink-500 to-yellow-500 text-white font-bold py-2 px-4 rounded"
                >
                  Admin Login
                </NavLink>
              </div>
              <div className="block lg:hidden">
                <button onClick={handleToggle}>
                  <div className="w-10 h-1 bg-white mb-2"></div>
                  <div className="w-10 h-1 bg-white mb-2"></div>
                  <div className="w-10 h-1 bg-white"></div>
                </button>
              </div>
            </>
          )}
        </div>
      </header>
      {isnavShow && (
        <div className="fixed bg-black top-20 md:top-20 right-0 w-full md:w-8/12 h-full z-20">
          <div className="p-5 pl-8">
            <NavLink
              onClick={scrollToTop}
              to="/"
              className="text-blue-500"
            >
              <div className="text-white text-2xl font-silmbold mb-3">
                <p>Home</p>
              </div>
            </NavLink>
            <NavLink
              onClick={scrollToTop}
              to="/about"
              className="text-blue-500"
            >
              <div className="text-white text-2xl font-silmbold mb-3">
                <p>About Us</p>
              </div>
            </NavLink>
            <NavLink
              onClick={scrollToTop}
              to="/contact"
              className="text-blue-500"
            >
              <div className="text-white text-2xl font-silmbold mb-3">
                <p>Contact Us</p>
              </div>
            </NavLink>
            <NavLink
              onClick={scrollToTop}
              to="/privacy"
              className="text-blue-500"
            >
              <div className="text-white text-2xl font-silmbold mb-3">
                <p>Privacy And Policy</p>
              </div>
            </NavLink>
            <NavLink
              onClick={scrollToTop}
              to="/cookie"
              className="text-blue-500"
            >
              <div className="text-white text-2xl font-silmbold mb-3">
                <p>Cookie Policy</p>
              </div>
            </NavLink>
            <NavLink onClick={scrollToTop} to="/faq" className="text-blue-500">
              <div className="text-white text-2xl font-silmbold mb-3">
                <p>FAQs</p>
              </div>
            </NavLink>
            <NavLink
              onClick={scrollToTop}
              to="/terms"
              className="text-blue-500"
            >
              <div className="text-white text-2xl font-silmbold mb-20">
                <p>Terms And Condition</p>
              </div>
            </NavLink>
            <div>
              {token && user && isLoggedIn ? (
                <>
                  <NavLink onClick={scrollToTop} to="/student/dashboard">
                    <div className="bg-blue-800 p-2 rounded-md text-center text-white text-2xl font-silmbold mb-3">
                      <p>Dashboard</p>
                    </div>
                  </NavLink>
                  <NavLink onClick={scrollToTop} to="/student/profile">
                    <div className="bg-blue-800 p-2 rounded-md text-center text-white text-2xl font-silmbold mb-3">
                      <p>Profile</p>
                    </div>
                  </NavLink>
                  <button onClick={handleLogout} className="text-blue-500">
                    <div className="flex items-center justify-center">
                      <img className="w-8 h-8" src={MobileLogout} alt="Logo" />
                    </div>
                    <div className="text-black font-bold">
                      <p>Logout</p>
                    </div>
                  </button>
                </>
              ) : (
                <>
                  <NavLink onClick={scrollToTop} to={"/login"}>
                    <div className="bg-black border border-white p-2 rounded-md text-center text-white text-2xl font-silmbold mb-3">
                      <p>Student Login</p>
                    </div>
                  </NavLink>
                  <NavLink onClick={scrollToTop} to={"/subadmin/login"}>
                    <div className="bg-black border border-white p-2 rounded-md text-center text-white text-2xl font-silmbold mb-3">
                      <p>SubAdmin Login</p>
                    </div>
                  </NavLink>
                  <NavLink onClick={scrollToTop} to="/admin/login">
                    <div className="bg-black border border-white p-2 rounded-md text-center text-white text-2xl font-silmbold mb-3">
                      <p>Admin Login</p>
                    </div>
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
