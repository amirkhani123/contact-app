import styles from "./styles/headerStyle.module.css";

function Header({ children }) {
  return <header className={styles.header}>{children}</header>;
}

export default Header;
