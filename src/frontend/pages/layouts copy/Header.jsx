import React, { useState, useEffect  } from 'react';
import { NavLink } from 'react-router-dom';
import { AES } from 'crypto-js';
import CryptoJS from 'crypto-js';
import Logo from "../../../assets/header/logo.png"
import MobileHome from "../../../assets/header/mobile-home.svg";
import MobileBook from "../../../assets/header/mobile-book-open.svg";
import MobileAbout from '../../../assets/header/mobile-about.svg';
import MobileContact from "../../../assets/header/mobile-contact.svg";
import MobileLogin from "../../../assets/header/mobile-login.svg";
import MobileLogout from "../../../assets/header/logout.png";

const Header = () => {
    const [user, setUser] = useState({});
    const [token, settoken] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    
    useEffect(() => {
        const ltoken = localStorage.getItem('token');
        const luser = localStorage.getItem('user');

        // Decrypt the user object
        if (token && luser) {
          const decryptedToken = AES.decrypt(ltoken, 'token-secret-key').toString(
            CryptoJS.enc.Utf8
          );
          const decryptedUser = AES.decrypt(luser, 'user-secret-key').toString(
            CryptoJS.enc.Utf8
          );

        //  if(decryptedUser.role == 3 || decryptedUser.role == 2){
            settoken(decryptedToken);
            setUser(JSON.parse(decryptedUser));
            setIsLoggedIn(true);
//}


        }
    }, []);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    const handleLogout = () => {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      window.location.href = "/"
    };

    return (
    <>
      <header className="bg-black py-4">
        <div className={`container mx-auto px-4 ${ (token && user && isLoggedIn) ? "flex" : "block md:flex mx-auto md:mx-0" }  items-center justify-between`}>
          <NavLink to="/" className="flex jusify-center items-center">
            <img className={`w-12 h-12 ${ (token && user && isLoggedIn) ? "" : "mx-auto md:mx-0 mb-4 md:mb-0" }`} src={Logo} alt="Logo" />
            <span className='hidden md:block text-white font-bold ml-2'>BDLearningPoint</span>
          </NavLink>
          <nav className='hidden sm:hidden lg:block'>
            <ul className="flex space-x-4">
              <li><NavLink onClick={scrollToTop} to="/" className="text-white hover:text-gray-300">Home</NavLink></li>
              <li><NavLink onClick={scrollToTop} to="/about" className="text-white hover:text-gray-300">About</NavLink></li>
              <li><NavLink onClick={scrollToTop} to="#" className="text-white hover:text-gray-300">Courses</NavLink></li>
              <li><NavLink onClick={scrollToTop} to="/contact" className="text-white hover:text-gray-300">Contact</NavLink></li>
            </ul>
          </nav>
          {token && user && isLoggedIn ? (
            <div>
              <NavLink onClick={scrollToTop} to="/student/dashboard" className="block lg:flex justify-center items-center text-white font-bold hover:text-gray-300">
                <div className='text-right'><p>{user.name}</p><p>Balance: ৳{user.balance}</p></div>
                <img className="w-12 h-12 ml-2 hidden sm:hidden" src={MobileAbout} alt="Logo" />
              </NavLink>
            </div>
          ) : (
              <div className='flex justify-center items-center'>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded">
                  SubAdmin Login
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  Student Login
                </button>
              </div>
            )}
        </div>
      </header>

      <header className='fixed sm:fixed lg:hidden bottom-0 left-0 bg-white w-full z-50 py-3 shadow-lg'>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className='pr-2'>
            <NavLink onClick={scrollToTop} to="/" className="text-blue-500">
              <div className='flex items-center justify-center'>
                <img className="w-8 h-8" src={MobileHome} alt="Logo" />
              </div>
              <div className='text-black font-bold'>
                <img />
                <p>Home</p>
              </div>
            </NavLink>
          </div>
          <div className='pr-2'>
            <NavLink onClick={scrollToTop} to="#" className="text-blue-500">
              <div className='flex items-center justify-center'>
                <img className="w-8 h-8" src={MobileBook} alt="Logo" />
              </div>
              <div className='text-black font-bold'><p>Courses</p></div>
            </NavLink>
          </div>
          <div onClick={scrollToTop} className='pr-2'>
            <NavLink to="/about" className="text-blue-500">
              <div className='flex items-center justify-center'>
                <img className="w-8 h-8" src={MobileAbout} alt="Logo" />
              </div>
              <div className='text-black font-bold'><p>About</p></div>
            </NavLink>
          </div>
          <div className='pr-2'>
            <NavLink onClick={scrollToTop} to="/contact" className="text-blue-500">
              <div className='flex items-center justify-center'>
                <img className="w-8 h-8" src={MobileContact} alt="Logo" />
              </div>
              <div className='text-black font-bold'><p>Contact</p></div>
            </NavLink>
          </div>
          <div>
          {token && user && isLoggedIn ? (
              <button onClick={handleLogout} className="text-blue-500">
                <div className='flex items-center justify-center'>
                  <img className="w-8 h-8" src={MobileLogout} alt="Logo" />
                </div>
                <div className='text-black font-bold'><p>Logout</p></div>
              </button>
          ) : (
              <NavLink onClick={scrollToTop} to="/login" className="text-blue-500">
              <div className='flex items-center justify-center'>
                <img className="w-8 h-8" src={MobileLogin} alt="Logo" />
              </div>
              <div className='text-black font-bold'><p>Login</p></div>
            </NavLink>
          )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
