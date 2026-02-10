import styles from "./styles/deleteAllselected.module.css";
import Modal from "./Modal";

function DeleteAllSelects({
  setContactsDb,
  setAllItemSelected,
  allItemSelected,
  setToastState,
  setShowModal,
  showModal,
}) {
  const deleteAllSelectedHandler = () => {
    setContactsDb((items) =>
      items.filter((i) => !allItemSelected.some((t) => t.id === i.id)),
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

      {showModal && (
        <Modal setShowModal={setShowModal} fn={deleteAllSelectedHandler} />
      )}
    </>
  );
}

export default DeleteAllSelects;
