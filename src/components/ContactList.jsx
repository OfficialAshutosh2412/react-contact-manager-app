import React from "react";
import "../index.css";

const ContactList = ({ renderContacts }) => {
  console.log(renderContacts);
  const contactData = renderContacts.map((_data) => {
    return (
      <div className="flex flex-1 flex-col gap-4 justify-center items-center rounded-xl bg-gradient-to-r from-purple-950 via-purple to-purple-600  h-40 text-white p-4 relative ">
        <div className="text-3xl">{_data.name}</div>
        <div>{_data.email}</div>
        <span className="absolute top-0  cross-btn bg-rose-500 rounded-full flex justify-content-center items-center h-10 p-3 cursor-pointer">
          <button>
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </span>
      </div>
    );
  });
  return (
    <div>
      <div className="w-4/5 mx-auto mt-5">
        <div className="flex flex-wrap gap-10">{contactData}</div>
      </div>
    </div>
  );
};

export default ContactList;
