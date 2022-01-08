import "./index.css";
import React, { useEffect, useState } from "react";

export default function Customers() {
  const [tableData, setTableData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/data")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setTableData(data)
        console.log(tableData)
      });
  },[]);

  return (
    <div className="page">
      <div className="top-section mt-10 h-52 w-full">
        <div className="flex flex-col place-content-center items-center h-full">
          <form className="w-3/6 ">
            <div className="flex items-center border-b border-indigo-800 py-2">
              <input
                className="m-3 appearance bg-transparent border-none w-full text-gray-800 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Search by customer, contract, description, etc..."
                aria-label="Full name"
              />
              {/* <input
                className="m-3 appearance-none bg-transparent border-none  text-gray-800 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Jane Doe"
                aria-label="Full name"
              /> */}
              <button
                className="m-3 flex-shrink-0 bg-indigo-600 hover:bg-indigo-800 border-indigo-600 hover:border-indigo-800 text-sm border-4 text-white py-1 px-2 rounded"
                type="button"
              >
                Search
              </button>
              <button
                className="m-3 flex-shrink-0 bg-white hover:bg-indigo-800 border-white hover:border-indigo-800 text-sm border-4 text-indigo hover:text-white py-1 px-2 rounded"
                type="button"
              >
                Add +
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="mid-section w-full flex flex-col items-center ">
        <div className="flex flex-col items-center w-3/6 ">
          <table className="table-fixed text-left w-full ">
            <thead>
              <tr>
                <th className="">ID</th>
                <th className="">Type</th>
                <th className="">Name</th>
                <th className="">Date</th>
                <th className="">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tableData && <tr className="h-16 text-left border-b border-b border-indigo-800 ">
                <td className="py-5">
                  The Sliding Mr. Bones (Next Stop, Pottersville)
                </td>
                <td className="py-5">Malcolm Lockyer</td>
                <td className="py-5">1961</td>
                <td className="py-5">
                  <button
                    className="mx-1 flex-shrink-0 bg-indigo-600 hover:bg-indigo-800 border-indigo-600 hover:border-indigo-800 text-sm border-4 text-white py-1 px-2 rounded"
                    type="button"
                  >
                    Edit
                  </button>
                  <button
                    className="mx-1 flex-shrink-0 bg-indigo-600 hover:bg-indigo-800 border-indigo-600 hover:border-indigo-800 text-sm border-4 text-white py-1 px-2 rounded"
                    type="button"
                  >
                    Delete
                  </button>
                </td>
              </tr>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
