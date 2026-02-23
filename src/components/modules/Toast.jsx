import { useContext } from "react";
import { Context } from "../../context/contexts";
import styles from "./styles/toast.module.css";

function Toast() {
  const { toast } = useContext(Context);
  return (
    <div
      className={`${styles.toast} ${toast.isShow ? styles.show : styles.hide}`}
    >
      <p>{toast.text}</p>
    </div>
  );
}

export default Toast;
