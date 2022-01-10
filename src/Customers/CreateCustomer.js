import { useState, useEffect } from "react";
import { Add, Delete, SetDT } from "../app/userData";


export default function CreateCustomer() {
  const [Name, setName] = useState(null);
  const [Type, setType] = useState(null);
  const [TodayDate, setTodayDate] = useState(new Date().toString());

  function handleName(event){
      setName(event.target.value);
  }

  function handleType (event){
      setType(event.target.value);
  }

  return (
    <div>
      <div className="flex flex-col place-content-center items-center h-full">
        <form className="w-4/6 ">
          <div className="flex items-center border-b border-indigo-800 py-2">
            <div class="relative inline-block w-full text-gray-700">
              <select
                class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border-none rounded-lg appearance-none focus:shadow-outline"
                placeholder="Select type"
              >
                <option>Select type</option>
                <option>Customer</option>
                <option>Contract</option>
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <input
              className="m-3 appearance bg-transparent border-none w-full text-gray-800 mr-3 py-1 px-2 leading-tight focus:shadow-outline"
              type="text"
              placeholder="Name"
              aria-label="Full name"
            />

            <button
              className="m-3 flex-shrink-0 bg-indigo-600 hover:bg-indigo-800 border-indigo-600 hover:border-indigo-800 text-sm border-4 text-white py-1 px-2 rounded"
              type="button"
            >
              Add +
            </button>
            <button
              className="m-3 flex-shrink-0 bg-white hover:bg-red-800 border-white hover:border-red-800 text-sm border-4 text-red hover:text-white py-1 px-2 rounded"
              type="button"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
