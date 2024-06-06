import { useState } from "react";
import Contact from "./components/Contact";
import ContactList from "./components/ContactList";
import uuid4 from "uuid4";
function App() {
  const [renderContacts, setRenderContacts] = useState([]);
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
