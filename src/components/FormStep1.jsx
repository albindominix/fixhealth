import React from "react";

function FormStep1({ register, errors }) {
  return (
    <div>
      {" "}
      <label className="block mb-6">
        <span className="text-gray-700">Name</span>
        <input
          name="name"
          id="name"
          {...register("name", {
            required: true,
            maxLength: 30,
          })}
          type="text"
          className="block w-full mt-1 p-3 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 outline-none"
          placeholder="Joe Bloggs"
        />
        {errors.name && errors.name.type === "required" && (
          <span className="text-red-600 m-3">This is required</span>
        )}
        {errors.name && errors.name.type === "maxLength" && (
          <span className="text-red-600 m-3">Max length exceeded</span>
        )}
      </label>
      <label className="block mb-6">
        <span className="text-gray-700">Phone number</span>
        <input
          name="number"
          id="number"
          {...register("number", {
            pattern: {
              value: /^[0-9]+$/,
            },
            required: true,
            maxLength: 30,
          })}
          type="text"
          className="block w-full mt-1 p-3 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 outline-none"
          placeholder="(+91) - 75 3478 1695"
        />
        {errors.number && errors.number.type === "pattern" && (
          <span className="text-red-600 m-3">Numbers Only</span>
        )}
        {errors.number && errors.number.type === "required" && (
          <span className="text-red-600 m-3">This is required</span>
        )}
        {errors.number && errors.number.type === "maxLength" && (
          <span className="text-red-600 m-3">Max length exceeded</span>
        )}
      </label>
    </div>
  );
}

export default FormStep1;
