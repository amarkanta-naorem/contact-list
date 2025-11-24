import { useState } from "react";
import ContactCard from "./components/ContactCard";
import LayoutSwitcher from "./components/LayoutSwitcher";
import TotalFavorite from "./components/TotalFavorite";

function App() {
  const [isSwitch, setIsSwitch] = useState(false);

  const [contacts, setContacts] = useState([
    { id: 1, name: "Alice Johnson", phone: "555-1234", favorite: true },
    { id: 2, name: "Bob Smith", phone: "555-5678", favorite: false },
    { id: 3, name: "Charlie Davis", phone: "555-8765", favorite: true },
  ]);

  function toggleFavorite (id) {
    const newContacts = [];

    for (let i = 0; i < contacts.length; i++) {
      newContacts.push(contacts[i])
    }

    for (let i = 0; i < newContacts.length; i++) {
      if (newContacts[i].id === id) {
        newContacts[i].favorite = !newContacts[i].favorite
      }
    }

    setContacts(newContacts)
  }

  return (
    <>
      <LayoutSwitcher isSwitch={isSwitch} setIsSwitch={setIsSwitch} />

      <TotalFavorite contacts={contacts} />

      <div className={`${isSwitch ? "content" : "container"}`}>
        {contacts.map((item) => (
          <ContactCard key={item.id} contact={item} toggleFavorite={toggleFavorite} />
        ))}
      </div>
    </>
  );
}

export default App;
