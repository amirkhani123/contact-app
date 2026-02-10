import { useState } from "react";
import styles from "./deleteAllselected.module.css";

function DeleteAllSelects({
  setContactsDb,
  setAllItemSelected,
  allItemSelected,
  setToastState,
}) {
  const [showModal, setShowModal] = useState(false);

  const deleteAllSelectedHandler = () => {
    setContactsDb((items) =>
      items.filter((i) => !allItemSelected.some((t) => t.id === i.id))
    );

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

      {/* مودال */}
      {showModal && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modal}>
            <p>آیا مطمئن هستید که می‌خواهید حذف کنید؟</p>

            <div className={styles.modalActions}>
              <button
                className={styles.cancelBtn}
                onClick={() => setShowModal(false)}
              >
                نه
              </button>

              <button
                className={styles.confirmBtn}
                onClick={deleteAllSelectedHandler}
              >
                بله، حذف کن
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DeleteAllSelects;
