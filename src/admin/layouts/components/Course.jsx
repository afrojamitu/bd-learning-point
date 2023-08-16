import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Course = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  function handleDropdownToggle() {
    setDropdownVisible(!dropdownVisible);
  }

  const toggleMainNav = () => {
    if (IsMainNavShow) {
      setIsMainNavShow(false);
    } else {
      setIsMainNavShow(true);
    }
  };

  return (
    <>
      <li>
        <button
          onClick={handleDropdownToggle}
          type="button"
          className="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
        </svg>

          <span className="flex-1 ml-3 text-left whitespace-nowrap">
            Manage Courses
          </span>
          <svg
            aria-hidden="true"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        {dropdownVisible && (
          <ul className="py-2 space-y-2">
            <li onClick={toggleMainNav}>
              <NavLink
                
                to="/admin/addcourse"
                className="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                Add Course
              </NavLink>
            </li>
            <li onClick={toggleMainNav}>
              <NavLink
                
                to="/admin/reviewpending"
                className="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                Review Pending
              </NavLink>
            </li>
            <li onClick={toggleMainNav}>
              <NavLink
                
                to="/admin/hold"
                className="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                Hold
              </NavLink>
            </li>
            <li onClick={toggleMainNav}>
              <NavLink
                
                to="/admin/approve"
                className="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                Approve
              </NavLink>
            </li>
            <li onClick={toggleMainNav}>
              <NavLink
                
                to="/admin/allcourse"
                className="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                All Courses
              </NavLink>
            </li>
            <li onClick={toggleMainNav}>
              <NavLink
                
                to="/admin/enroll"
                className="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                Enroll In Course
              </NavLink>
            </li>
          </ul>
        )}
      </li>
    </>
  );
};

export default Course;
