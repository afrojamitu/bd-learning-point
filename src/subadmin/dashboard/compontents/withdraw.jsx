import { useState } from "react";
import { dateformat } from "../../../helpers/helper";

const WithdrawComponent = ({ context }) => {
  let i = 1;
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const withdraws = context[0];
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = withdraws.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(withdraws.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <table className="border-collapse border border-slate-500 w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
        <thead className="text-xs text-gray-700 uppercase bg-white text-black">
          <tr>
            <th scope="col" className="p-6">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Payment Method
            </th>

            <th scope="col" className="px-6 py-3">
              Request Date
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr
              key={item.id}
              className="section-bg border-b dark:text-white"
            >
              <td className="px-6 py-4">{item.id}</td>
              <td className="px-6 py-4">{item.payment_method}</td>
              <td className="px-6 py-4">{dateformat(item.created_at)}</td>
              <td className="px-6 py-4 text-center">{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default WithdrawComponent;
