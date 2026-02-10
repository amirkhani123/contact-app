import { useState } from "react";
import Header from "./components/Header";
import ShowContacts from "./components/ShowContacts";
import Toast from "./components/modules/Toast";
import SaveButton from "./components/modules/SaveButton";
import FormHeader from "./components/modules/FormHeader";
import DeleteAllSelects from "./components/modules/DeleteAllSelects";
function App() {
  const [contactsDb, setContactsDb] = useState(() => {
    return JSON.parse(localStorage.getItem("contactsDB")) || [];
  });

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
          <ShowContacts
            contactsDb={contactsDb}
            setContatcsDb={setContactsDb}
            setToastState={setToastState}
            setSelectedContacts={setSelectedContacts}
            setAllItemSelected={setAllItemSelected}
          />
        ) : (
          <p>مخاطبی وجود ندارد !</p>
        )}
      </main>
    </>
  );
}

export default App;
