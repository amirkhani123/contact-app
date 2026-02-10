import { useEffect, useState } from "react";
import Header from "./components/Header";
import ShowContacts from "./components/ShowContacts";
import Toast from "./components/modules/Toast";
import SaveButton from "./components/modules/SaveButton";
import FormHeader from "./components/modules/FormHeader";
import DeleteAllSelects from "./components/modules/DeleteAllSelects";
import Search from "./components/Search";
function App() {
  const [showData, setShowData] = useState([]);
  const [contactsDb, setContactsDb] = useState(() => {
    return JSON.parse(localStorage.getItem("contactsDB")) || [];
  });
  // console.log(contactsDb)
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    if (!searchInput.trim()) {
      return setShowData(contactsDb);
    }

    const filtered = contactsDb.filter(
      (contact) =>
        contact.contactName.includes(searchInput.trim()) ||
        contact.email.toLowerCase().includes(searchInput.trim()),
    );

    setShowData(filtered);
  }, [searchInput, contactsDb]);

  const [toastState, setToastState] = useState({
    text: "",
    isShow: false,
  });

  const [selectedContact, setSelectedContacts] = useState(null);
  const [allItemSelected, setAllItemSelected] = useState([]);
  console.log(allItemSelected.length, contactsDb);

  return (
    <>
      <Header>
        <h1>برنامه مدیریت مخاطبین </h1>
        <FormHeader
          setContactsDb={setContactsDb}
          setToastState={setToastState}
          selectedContact={selectedContact}
        />
      </Header>
      <Toast text={toastState.text} isShow={toastState.isShow} />
      {allItemSelected.length ? (
        <DeleteAllSelects
          setContactsDb={setContactsDb}
          setAllItemSelected={setAllItemSelected}
          setToastState={setToastState}
          allItemSelected={allItemSelected}
        />
      ) : (
        <SaveButton setToastState={setToastState} contactsDb={contactsDb} />
      )}

      <main>
        {contactsDb.length ? (
          <>
            <Search setSearchInput={setSearchInput} searchInput={searchInput} />
            <ShowContacts
              showData={showData}
              setContatcsDb={setContactsDb}
              setToastState={setToastState}
              setSelectedContacts={setSelectedContacts}
              setAllItemSelected={setAllItemSelected}
            />
          </>
        ) : (
          <p>مخاطبی وجود ندارد !</p>
        )}
      </main>
    </>
  );
}

export default App;
