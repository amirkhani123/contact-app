import styles from "./styles/deleteAllselected.module.css";
import Modal from "./Modal";
import { useContext } from "react";
import { ContactsContext } from "../../context/contexts";

function DeleteAllSelects({
  setAllItemSelected,
  allItemSelected,
  setToastState,
  setShowModal,
  showModal,
}) {
  const { dispatch } = useContext(ContactsContext);
  const deleteAllSelectedHandler = () => {
    dispatch({ type: "DELETE_ALL_CONTACT", payload: allItemSelected });
    setToastState({
      text: "✅ مخاطبین با موفقیت حذف شدند",
      isShow: true,
    });

    setTimeout(() => {
      setToastState({ text: "", isShow: false });
    }, 3500);

    setAllItemSelected([]);
    setShowModal(false);
  };

  return (
    <>
      {/* دکمه اصلی */}
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
