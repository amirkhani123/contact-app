import { toastShow } from "../../helpers/helpers";
import styles from "./saveButton.module.css";

function SaveButton({ contactsDb, setToastState }) {
  const saveHandler = () => {
    localStorage.setItem("contactsDB", JSON.stringify(contactsDb));
    toastShow(setToastState, "✅ با موفقیت ذخیره شد  ");
  };
  return (
    <div className={styles.saveButton} onClick={saveHandler}>
      <p>ذخیره کردن</p>
    </div>
  );
}

export default SaveButton;
