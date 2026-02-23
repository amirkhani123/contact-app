import { useContext, useEffect, useState } from "react";
import Header from "./components/Header";
import ShowContacts from "./components/ShowContacts";
import Toast from "./components/modules/Toast";
import SaveButton from "./components/modules/SaveButton";
import FormHeader from "./components/modules/FormHeader";
import DeleteAllSelects from "./components/modules/DeleteAllSelects";
import Search from "./components/Search";
import Card from "./components/Card";
import { Context } from "./context/contexts";

function App() {
  const { contacts } = useContext(Context);
  const [showData, setShowData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [selectedContact, setSelectedContacts] = useState(null);
  const [allItemSelected, setAllItemSelected] = useState([]);

  useEffect(() => {
    if (!searchInput.trim()) {
      return setShowData(contacts);
    }

    const filtered = contacts.filter(
      (contact) =>
        contact.contactName.includes(searchInput.trim()) ||
        contact.email.toLowerCase().includes(searchInput.trim()),
    );

    setShowData(filtered);
  }, [searchInput, contacts]);

  return (
    <>
      <Header>
        <h1>برنامه مدیریت مخاطبین </h1>

        <FormHeader
          key={selectedContact ? selectedContact.id : "new"}
          selectedContact={selectedContact}
        />
      </Header>
      <Toast />
      {allItemSelected.length ? (
        <DeleteAllSelects
          setAllItemSelected={setAllItemSelected}
          allItemSelected={allItemSelected}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      ) : (
        <SaveButton contactsDb={contacts} />
      )}

      <main>
        {contacts.length ? (
          <>
            <Search setSearchInput={setSearchInput} searchInput={searchInput} />
            <ShowContacts>
              {showData.map((item) => (
                <Card
                  key={item.id}
                  item={item}
                  setSelectedContacts={setSelectedContacts}
                  setAllItemSelected={setAllItemSelected}
                />
              ))}
            </ShowContacts>
          </>
        ) : (
          <p>مخاطبی وجود ندارد !</p>
        )}
      </main>
    </>
  );
}

export default App;
