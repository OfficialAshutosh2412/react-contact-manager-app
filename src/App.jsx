import { useEffect, useState } from "react";
import Contact from "./components/Contact";
import ContactList from "./components/ContactList";
import uuid4 from "uuid4";
import { render } from "react-dom";
function App() {
  const storageKey = "contact_Key"; //storage key creation
  const [renderContacts, setRenderContacts] = useState(() => {
    return JSON.parse(localStorage.getItem(storageKey)) || [];
  });

  // localstorage functionality

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(renderContacts)); //set data to storage
  }, [renderContacts]);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(renderContacts));
  });
  const contactProp = (data) => {
    setRenderContacts([...renderContacts, { id: uuid4(), data }]);
  };

  const removeContact = (id) => {
    const newlist = renderContacts.filter((val) => {
      return val.id !== id;
    });
    setRenderContacts(newlist);
  };

  return (
    <>
      <Contact contactProp={contactProp} />
      <ContactList
        renderContacts={renderContacts}
        removeContact={removeContact}
      />
    </>
  );
}

export default App;
