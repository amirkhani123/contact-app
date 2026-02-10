import styles from "./showContacts.module.css";

import Card from "./Card";
function ShowContacts({
  contactsDb,
  setContatcsDb,
  setToastState,
  setSelectedContacts,
  setAllItemSelected,
}) {

  return (
    <div className={styles.showContacts}>
      {contactsDb.map((item) => (
        <Card
          key={item.id}
          item={item}
          setContatcsDb={setContatcsDb}
          setToastState={setToastState}
          setSelectedContacts={setSelectedContacts}
          setAllItemSelected={setAllItemSelected}
        />
      ))}
    </div>
  );
}
export default ShowContacts;
