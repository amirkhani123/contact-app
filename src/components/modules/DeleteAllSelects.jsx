import styles from "./styles/deleteAllselected.module.css";
import Modal from "./Modal";
import { useContext } from "react";
import { Context } from "../../context/contexts";
import { toastHideFa } from "../../helpers/helpers";

function DeleteAllSelects({
  setAllItemSelected,
  allItemSelected,
  setShowModal,
  showModal,
}) {
  const { contactsDispatch, toastDispatch } = useContext(Context);
  const deleteAllSelectedHandler = () => {
    contactsDispatch({ type: "DELETE_ALL_CONTACT", payload: allItemSelected });
    toastDispatch({ type: "SHOW", payload: "✅ مخاطبین با موفقیت حذف شدند" });
    toastHideFa(toastDispatch);
    setAllItemSelected([]);
    setShowModal(false);
  };

  return (
    <>
      <div
        className={styles.deleteButton}
        onClick={() => {
          setShowModal(true);
        }}
      >
        <p>پاک کردن انتخابی‌ها</p>
      </div>

      {showModal && (
        <Modal setShowModal={setShowModal} fn={deleteAllSelectedHandler} />
      )}
    </>
  );
}

export default DeleteAllSelects;
