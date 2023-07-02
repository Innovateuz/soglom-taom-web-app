import React, { useRef, useState } from "react";
import { Button } from "../../../components/Button";
import { toast } from "react-toastify";

export const UpdateAccaunt = () => {
  const [gender, setGender] = useState();

  const fullname: any = useRef();
  const username: any = useRef();
  const location1: any = useRef();
  const location2: any = useRef();
  const age: any = useRef();
  const height: any = useRef();
  const weight: any = useRef();
  const phoneNumber: any = useRef();

  const onSubmit = () => {
    let data = {
      fullName: fullname?.current?.value,
      username: username?.current?.value,
      location1: location1?.current?.value,
      location2: location2?.current?.value,
      age: age?.current?.value,
      height: height?.current?.value,
      weight: weight?.current?.value,
      phoneNumber: phoneNumber?.current?.value,
      gender: gender,
    };

    window.localStorage.setItem("userdata", JSON.stringify(data));
    toast("Done");
  };

  return (
    <div className="flex flex-col gap-3">
      <p className="text-center text-2xl py-6">Let's update your accaunt</p>
      <input
        type="text"
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="FullName"
        ref={fullname}
        required
      />
      <input
        type="text"
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="username"
        ref={username}
        required
      />
      <input
        type="text"
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Location 1"
        ref={location1}
        required
      />
      <input
        type="text"
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        ref={location2}
        placeholder="location 2"
        required
      />
      <input
        type="number"
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        ref={age}
        placeholder="age"
        required
      />
      <input
        type="number"
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="hieght"
        ref={height}
        required
      />
      <input
        type="number"
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="weight"
        ref={weight}
        required
      />
      <input
        type="number"
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="phone number"
        ref={phoneNumber}
        required
      />
      <select
        id="countries"
        onChange={(e: any) => setGender(e.target.value)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="Male">Male</option>
        <option value="Female" defaultChecked>
          Female
        </option>
      </select>

      <Button
        name="Update"
        onClick={() => onSubmit()}
        className="bg-primary text-white mt-4"
      />
    </div>
  );
};
