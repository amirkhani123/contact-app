import styles from "./styles/showContacts.module.css";

function ShowContacts({ children }) {
  return <div className={styles.showContacts}>{children}</div>;
}
export default ShowContacts;
