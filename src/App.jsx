import { useState } from "react";
import Contact from "./components/Contact";
import ContactList from "./components/ContactList";
function App() {
  const [renderContacts, setRenderContacts] = useState([]);
  const contactProp = (data) => {
    setRenderContacts([...renderContacts, data]);
  };

  return (
    <>
      <Contact contactProp={contactProp} />
      <ContactList renderContacts={renderContacts} />
    </>
  );
}

export default App;
