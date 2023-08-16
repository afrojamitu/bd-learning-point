import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../layouts/Breadcrumb";
import { dateformat } from "../../helpers/helper.js";
import { useQuery } from "react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import { Loader } from "@mantine/core";
import { getCounsellorList } from "../../hooks/admin/adminCommonApi";

const TeamLeaderList = () => {
  const [count, setCount] = useState(25);
  const increase = 25;
  const colSpan = 8;
  const {
    data: counsellors,
    isLoading,
    isError,
    isFetching,
    error,
    refetch,
  } = useQuery("getCounsellorList", () => getCounsellorList({ count }));

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
  }, [count, refetch]);
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

  if (!isLoading && counsellors?.data?.data?.length === 0)
    content = (
      <tr className="border-b section-bg">
        <td colSpan={colSpan} className="text-center text-white py-6">
          No Counsellor Found!
        </td>
      </tr>
    );

  if (!isLoading && counsellors?.data?.data?.length > 0)
    content = counsellors?.data?.data?.map((counsellor, key) => (
      <tr
        key={key + 1}
        className="section-bg border-b dark:text-white"
      >
        <td
          data-label="SL"
          className="text-black dark:text-white block md:table-cell text-end md:text-start md:before:content-[''] before:content-[attr(data-label)] before:float-left before:font-bold font-medium text-gray-900 whitespace-nowrap px-6 p-4"
        >
          {key + 1}
        </td>
        <th
          scope="row"
          data-label="ID"
          className="text-black dark:text-white block md:table-cell text-end md:text-start md:before:content-[''] before:content-[attr(data-label)] before:float-left before:font-bold font-medium text-gray-900 whitespace-nowrap px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
        >
          {counsellor?.referral_code}
        </th>
        <th
          scope="row"
          data-label="Name"
          className="text-black dark:text-white block md:table-cell text-end md:text-start md:before:content-[''] before:content-[attr(data-label)] before:float-left before:font-bold font-medium text-gray-900 whitespace-nowrap px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
        >
          {counsellor?.name}
        </th>
        <td
          data-label="Email"
          className="text-black dark:text-white block md:table-cell text-end md:text-start md:before:content-[''] before:content-[attr(data-label)] before:float-left before:font-bold font-medium text-gray-900 whitespace-nowrap px-6 py-4"
        >
          {counsellor?.email}
        </td>
        <td
          data-label="Total Student"
          className="text-black dark:text-white block md:table-cell text-end md:text-start md:before:content-[''] before:content-[attr(data-label)] before:float-left before:font-bold font-medium text-gray-900 whitespace-nowrap px-6 py-4"
        >
          {counsellor?.counsellor_assigned_user?.length}
        </td>
        <td
          data-label="Date"
          className="text-black dark:text-white block md:table-cell text-end md:text-start md:before:content-[''] before:content-[attr(data-label)] before:float-left before:font-bold font-medium text-gray-900 whitespace-nowrap px-6 py-4"
        >
          {dateformat(counsellor?.created_at)}
        </td>
      </tr>
    ));

  return (
    <>
      <Breadcrumb title="Counsellors" />
      <div className="container mx-auto my-5 p-5">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg section-bg p-2 table-wrapper">
          <div className="pb-4 section-bg"></div>
          <InfiniteScroll
            dataLength={
              counsellors?.data?.data?.length
                ? counsellors?.data?.data?.length
                : 0
            }
            next={() => {
              setCount((prev) => prev + increase);
            }}
            hasMore={counsellors?.data?.data?.length == count}
          >
            <table className="border-collapse border border-slate-500 w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-white text-black">
                <tr>
                  <th scope="col" className="p-4">
                    SL
                  </th>
                  <th scope="col" className="px-6 py-3">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Total Student
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date
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
export default TeamLeaderList;
