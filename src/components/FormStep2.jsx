import React from "react";
import { useParams } from "react-router-dom";

function FormStep2({ register, errors }) {
  const { city } = useParams();

  return (
    <div>
      <label className="block mb-6">
        <span className="text-gray-700">Age</span>
        <input
          name="age"
          id="age"
          {...register("age", {
            pattern: {
              value: /^[0-9]+$/,
            },
            required: true,
            maxLength: 3,
          })}
          type="text"
          className="block w-full mt-1 p-3 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 outline-none"
          placeholder="Enter your age"
        />
        {errors.age && errors.age.type === "pattern" && (
          <span className="text-red-600 m-3">Numbers Only</span>
        )}
        {errors.age && errors.age.type === "required" && (
          <span className="text-red-600 m-3">This is required</span>
        )}
        {errors.rate && errors.rate.type === "maxLength" && (
          <span className="text-red-600 m-3">Max length exceeded</span>
        )}
      </label>
      <div className="relative inline-flex flex-col  mb-6 w-full">
        <span className="text-gray-700">Cities</span>
        <div>
          <p className="w-full text-center text-teal-500 md:text-base text-sm">
            for demo purpose kindily select the options
          </p>
          <svg
            className="w-2 h-2 absolute bottom-0 right-0 m-4 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 412 232"
          >
            <path
              d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
              fill="#648299"
              fillRule="nonzero"
            />
          </svg>
          <div className="max-h-[200px]">
           {!city? (<select
              name="city"
              {...register("city", {
                required: true,
              })}
              className="border border-gray-300 rounded-md text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none w-full"
            >
              <optgroup label="Category">
                <option value="" disabled selected hidden>
                  Select City
                </option>
                <option>Kochi</option>
                <option>Mumbai</option>
                <option>Chennai</option>
                <option>Pune</option>
              </optgroup>
            </select>):(
                <select
                name="city"
                {...register("city", {
                  required: true,
                })}
                className="border border-gray-300 rounded-md text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none w-full"
              >
                <optgroup label="Category">
                  <option value="" disabled selected hidden>
                    Select City
                  </option>
                  <option>{city}</option>
                 
                </optgroup>
              </select>
            )}
          </div>
        </div>
        {errors.city && errors.city.type === "required" && (
          <span className="text-red-600 m-3">This is required</span>
        )}
      </div>
      <label className="block mb-6">
        <span className="text-gray-700">Company</span>
        <input
          name="company"
          id="company"
          {...register("company", {
            required: true,
            maxLength: 30,
          })}
          type="text"
          className="block w-full mt-1 p-3 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 outline-none"
          placeholder="Adobe"
        />
        {errors.company && errors.company.type === "required" && (
          <span className="text-red-600 m-3">This is required</span>
        )}
        {errors.company && errors.company.type === "maxLength" && (
          <span className="text-red-600 m-3">Max length exceeded</span>
        )}
      </label>
    </div>
  );
}

export default FormStep2;
