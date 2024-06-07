import React, { useState } from "react";
import "../index.css";

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
    setContactInfo({ name: "", email: "" });
  };

  return (
    <form className="w-4/5 mx-auto mt-5 p-4 rounded-xl shadow-xl shadow-purple-900/50 ">
      <div className=" mt-5 mb-5 rounded-lg h-32 flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-5 text-2xl text-white">
        <h1>
          <i className="fa-solid fa-id-card-clip text-xl"></i> Contact Manager
        </h1>
      </div>
      <div className="flex md:flex-row flex-col w-5/5 gap-5">
        <div className=" w-full">
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
            className="block w-full p-2.5 bg-purple-500 text-white  border-2 border-t-transparent border-r-transparent border-l-transparent border-b-indigo-500 transition-all focus:bg-purple-900 focus:text-white rounded"
          />
        </div>
        <div className=" w-full">
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
            className="block w-full p-2.5 bg-purple-500 text-white  border-2 border-t-transparent border-r-transparent border-l-transparent border-b-indigo-500 transition-all focus:bg-purple-900 focus:text-white rounded"
          />
        </div>
        <div>
          <button className="btn" onClick={handleSubmit}>
            +Add
          </button>
        </div>
      </div>
    </form>
  );
}

export default Contact;
