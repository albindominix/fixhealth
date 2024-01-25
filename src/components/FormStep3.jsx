import React from "react";

function FormStep3({ register, errors, watchAge, doctors = [] }) {
  return (
    <div>
      <label className="block mb-6">
        <span className="text-gray-700">Complaint</span>

        <textarea
          name="complaints"
          id="complaints"
          {...register("complaints", { required: true })}
          placeholder="Describe your pain"
          className="block w-full mt-1 p-3 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 outline-none"
        ></textarea>
        {errors.complaints && errors.complaints.type === "required" && (
          <span className="text-red-600 m-3">This is required</span>
        )}
        {errors.complaints && errors.complaints.type === "maxLength" && (
          <span className="text-red-600 m-3">Max length exceeded</span>
        )}
      </label>
      {watchAge > 40 ? (
        <label className="block mb-6">
          <span className="text-gray-700">Previous experience</span>
          <input
            name="previous"
            id="previous"
            {...register("previous", {
              required: true,
              maxLength: 30,
            })}
            type="text"
            className="block w-full mt-1 p-3 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 outline-none"
            placeholder="Previous experience with physiotherapy"
          />
          {errors.previous && errors.previous.type === "required" && (
            <span className="text-red-600 m-3">This is required</span>
          )}
          {errors.previous && errors.previous.type === "maxLength" && (
            <span className="text-red-600 m-3">Max length exceeded</span>
          )}
        </label>
      ) : (
        ""
      )}
      <div className="relative inline-flex flex-col gap-3 mb-6 w-full">
        <span className="text-gray-700">Doctors Available</span>
        <div>
          <svg
            className="w-2 h-2 absolute  right-0 m-4 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 412 232"
          >
            <path
              d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
              fill="#648299"
              fillRule="nonzero"
            />
          </svg>
          <select
            
            name="doctor"
            {...register("doctor", {
              required: true,
            })}
            className="border border-gray-300 rounded-md text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none w-full"
          >
            <optgroup label="Doctors">
              <option value="" disabled selected hidden>
                Select Your Doctor{" "}
              </option>

              {doctors &&
                doctors?.map((item, index) => (
                  <option key={index}>
                    {item.name}, {item.speciality}
                  </option>
                ))}
            </optgroup>
          </select>
          {errors.doctor && errors.doctor.type === "required" && (
            <span className="text-red-600 m-3">This is required</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default FormStep3;
