import { useContext } from "react";
import styles from "./styles/saveButton.module.css";
import { Context } from "../../context/contexts";
import { toastHideFa } from "../../helpers/helpers";

function SaveButton() {
  const { contacts, toastDispatch } = useContext(Context);
  const saveHandler = () => {
    localStorage.setItem("contactsDB", JSON.stringify(contacts));
    toastDispatch({ type: "SHOW", payload: "✅ با موفقیت ذخیره شد" });
    toastHideFa(toastDispatch);
  };
  return (
    <div className={styles.saveButton} onClick={saveHandler}>
      <p>ذخیره کردن</p>
    </div>
  );
}

export default SaveButton;
