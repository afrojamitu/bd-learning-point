import React from 'react';
import {Link, NavLink } from 'react-router-dom';
import Logo from "../../../assets/footer/logo.png";
import GoogleImage from "../../../assets/footer/google-play.png";
import AppleImage from "../../../assets/footer/app-store.png";

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-black text-white mb-20 lg:mb-0">
      <div className="container mx-auto px-8 pt-20 pb-16 lg:pb-32 grid grid-cols-1 lg:grid-cols-4 justify-between items-center">
        <div className="flex flex-col items-start mb-4 md:mb-0">
          <NavLink onClick={scrollToTop} to="/">
            <img className="w-24 h-24 lg:w-16 lg:h-16 mb-2" src={Logo} alt="Logo" />
            <span className='text-2xl text-white font-bold'>BDLearningPoint</span>
          </NavLink>
          <p className="text-1xl my-2">Mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present</p>
          <div className="flex mt-4 space-x-4">
            <Link href="#" className="text-white">
              <i className="fab fa-facebook"></i>
            </Link>
            <Link href="#" className="text-white">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link href="#" className="text-white">
              <i className="fab fa-instagram"></i>
            </Link>
          </div>
          <div className="mt-4 space-x-4 flex jsutify-center items-start lg:items-center">
            <Link onClick={scrollToTop} to="#"><img src={GoogleImage}/></Link>
            <Link onClick={scrollToTop} to="#"><img src={AppleImage}/></Link>
          </div>
        </div>
        <div className="mt-10 lg:mt-0 lg:mx-auto">
          <h2 className='text-2xl font-bold mb-4'>Company</h2>
          <ul className="space-y-2">
            <li >
              <Link onClick={scrollToTop} to="#" className="hover:text-blue-800">Courses</Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to="/about" className="hover:text-blue-800">About Us</Link>
            </li>
            <li>
              <Link onClick={scrollToTop} href="/contact" className="hover:text-blue-800">Contact Us</Link>
            </li>
            <li>
              <Link onClick={scrollToTop} href="#" className="hover:text-blue-800">Blogs</Link>
            </li>
          </ul>
        </div>
        <div className="mt-10 lg:mt-0 lg:mx-auto">
          <h2 className='text-2xl font-bold mb-4'>Legal Info</h2>
          <ul className="space-y-2">
            <li >
              <Link onClick={scrollToTop} to="/privacy" className="hover:text-blue-800">Privacy And Policy</Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to="/cookie" className="hover:text-blue-800">Cookie Policy</Link>
            </li>
            <li>
              <Link onClick={scrollToTop} href="/terms" className="hover:text-blue-800">Terms And Condition</Link>
            </li>
            <li>
              <Link onClick={scrollToTop} href="/faq" className="hover:text-blue-800">FAQs</Link>
            </li>
          </ul>
        </div>
        <div className="mt-10 lg:mt-0 lg:mx-auto">
          <h2 className='text-2xl font-bold mb-4'>Contact Info</h2>
          <ul className="space-y-2">
            <li >
              <p className="font-bold"><span className='text-blue-800'>Address:</span> Chandana Chowrasta,Gazipur,Dhaka</p>
            </li>
            <li>
              <p className="font-bold"><span className='text-blue-800'>Phone: </span> +8801789461395</p>
            </li>
            <li>
              <p className="font-bold"><span className='text-blue-800'>Email:</span> BDLearningPointelearningplatform@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>
      <div className='px-8 py-6 border-t border-t-white flex justify-center'>
        <p className='mx-auto'>© 2023 BDLearningPoint . All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
