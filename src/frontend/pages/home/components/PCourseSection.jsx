import { Link } from "react-router-dom";
import course1 from "../../../../assets/home/alquaran.jpg";
import course2 from "../../../../assets/home/islamicmusic.jpg";
import course3 from "../../../../assets/home/photoediting.jpg";
import course4 from "../../../../assets/home/videoediting.jpg";
import course5 from "../../../../assets/home/dataentry.jpg";
import course6 from "../../../../assets/home/graphicdesign.jpg";
import HeaderImage from "../../../../assets/home/flame-1210.gif";

function PCourseSection() {
  return (
    <>
      <section className="pcourse-section py-8 lg:py-16 bg-[#112263]">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center">
            <img
              src={HeaderImage}
              className="w-10/12 lg:w-3/12  drop-shadow-2xl"
              alt=""
            />
          </div>
          <div className="section-headpart text-center -mt-2 mt-10 mb-16">
            <h1 className="section-header text-5xl text-white font-bold uppercase">
              POPULAR COURSES
            </h1>
            <p className="max-w-[900px] mx-auto section-des text-md lg:text-xl text-gray-200 mt-3 px-2 lg:px-10 font-semibold uppercase">
            Courses like Photo Editing, Video Editing, Graphics Design and many more will work to enhance your skills
            </p>
          </div>
          <div className="pcourse-main grid grid-cols-3 gap-8 pcards_block_home">
            <div className="mb-4 bg-slate-800 rounded-lg">
              <div className="card-image">
                <Link to="#">
                  <img className="w-full h-[400px]" src={course1} alt="" />
                </Link>
              </div>
              <div className="p-5 -ml-5 pl-8">
                <Link to="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                    Learn Al Quran
                  </h5>
                </Link>
                <p className="mb-3 font-Roboto text-white">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                {/* <Link
                  to="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Read more
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link> */}
              </div>
            </div>
            <div className="mb-4 bg-slate-800 rounded-lg">
              <div className="card-image">
                <Link to="#">
                  <img className="w-full h-[400px]" src={course2} alt="" />
                </Link>
              </div>
              <div className="p-5 -ml-5 pl-8">
                <Link to="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                    Islamic music education
                  </h5>
                </Link>
                <p className="mb-3 font-Roboto text-white">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                {/* <Link
                  to="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Read more
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link> */}
              </div>
            </div>
            <div className="mb-4 bg-slate-800 rounded-lg">
              <div className="card-image">
                <Link to="#">
                  <img className="w-full h-[400px]" src={course3} alt="" />
                </Link>
              </div>
              <div className="p-5 -ml-5 pl-8">
                <Link to="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                    Photo Editing
                  </h5>
                </Link>
                <p className="mb-3 font-Roboto text-white">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                {/* <Link
                  to="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Read more
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link> */}
              </div>
            </div>
            <div className="mb-4 bg-slate-800 rounded-lg">
              <div className="card-image">
                <Link to="#">
                  <img className="w-full h-[400px]" src={course4} alt="" />
                </Link>
              </div>
              <div className="p-5 -ml-5 pl-8">
                <Link to="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                    Video Editing
                  </h5>
                </Link>
                <p className="mb-3 font-Roboto text-white">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                {/* <Link
                  to="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Read more
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link> */}
              </div>
            </div>
            <div className="mb-4 bg-slate-800 rounded-lg">
              <div className="card-image">
                <Link to="#">
                  <img className="w-full h-[400px]" src={course5} alt="" />
                </Link>
              </div>
              <div className="p-5 -ml-5 pl-8">
                <Link to="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                    Data Entry
                  </h5>
                </Link>
                <p className="mb-3 font-Roboto text-white">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                {/* <Link
                  to="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Read more
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link> */}
              </div>
            </div>
            <div className="mb-4 bg-slate-800 rounded-lg">
              <div className="card-image">
                <Link to="#">
                  <img className="w-full h-[400px]" src={course6} alt="" />
                </Link>
              </div>
              <div className="p-5 -ml-5 pl-8">
                <Link to="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                    Graphics Design
                  </h5>
                </Link>
                <p className="mb-3 font-Roboto text-white">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                {/* <Link
                  to="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Read more
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link> */}
              </div>
            </div>

          </div>
          <div className="flex justify-center items-center mt-20">
            <Link
              to="/coming_soon"
              className="inline-flex justify-center items-center w-40 h-12 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
            >
              More Course
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default PCourseSection;
