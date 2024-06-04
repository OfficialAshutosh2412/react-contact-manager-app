import React from "react";

const ContactList = ({ renderContacts }) => {
  console.log(renderContacts);
  const contactData = renderContacts.map((_data) => {
    return (
      <div>
        <div>{_data.name}</div>
        <div>{_data.email}</div>
      </div>
    );
  });
  return (
    <div>
      <h1>hi list</h1>

      <div>{contactData}</div>
    </div>
  );
};

export default ContactList;
