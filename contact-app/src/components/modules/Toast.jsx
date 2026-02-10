import styles from "./styles/toast.module.css";

function Toast({ text, isShow }) {
  return (
    <div className={`${styles.toast} ${isShow ? styles.show : styles.hide}`}>
      <p>{text}</p>
    </div>
  );
}

export default Toast;
