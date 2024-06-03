import React, { useState } from "react";
import "../App.css";

function Contact({ contactProp }) {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setContactInfo({ ...contactInfo, name: e.target.value });
    } else {
      setContactInfo({ ...contactInfo, email: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contactInfo.name === "" || contactInfo.email === "") {
      alert("All fields are required...");
      return;
    }
    contactProp(contactInfo);
  };

  return (
    <form className="max-w-lg mx-auto mt-5 p-4 rounded-xl shadow-xl shadow-purple-500/50 ">
      <div className=" mt-5 mb-5 rounded-lg h-32 flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-5 text-2xl text-white">
        <h1>
          <i className="fa-solid fa-id-card-clip text-xl"></i> Contact Manager
        </h1>
      </div>
      <div className="mb-5">
        <label
          htmlFor="username"
          className="block  text-sm font-medium text-white"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="username"
          value={contactInfo.name}
          onChange={handleChange}
          className="block w-full p-2.5 bg-transparent text-slate-400  border-2 border-t-transparent border-r-transparent border-l-transparent border-b-indigo-500 transition-all focus:bg-purple-900 focus:text-white"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="useremail"
          className="block  text-sm font-medium text-white"
        >
          E-mail
        </label>
        <input
          type="email"
          name="email"
          id="useremail"
          value={contactInfo.email}
          onChange={handleChange}
          className=" block w-full p-2.5 bg-transparent text-slate-400 border-2 border-t-transparent border-r-transparent border-l-transparent border-b-indigo-500 transition-all focus:bg-purple-900 focus:text-white"
        />
      </div>
      <div>
        <button
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
          onClick={handleSubmit}
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            +Add contact
          </span>
        </button>
      </div>
    </form>
  );
}

export default Contact;
