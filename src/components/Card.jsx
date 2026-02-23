import { useContext, useState } from "react";
import styles from "./styles/showContacts.module.css";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import Modal from "./modules/Modal";
import { Context } from "../context/contexts";
import { toastHideFa } from "../helpers/helpers";

function Card({ item, setSelectedContacts, setAllItemSelected }) {
  const { contactsDispatch, toastDispatch } = useContext(Context);
  const [isSelect, setIsSelect] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const confirmDeleteHandler = () => {
    contactsDispatch({ type: "DELETE_CONTACT", payload: item });

    toastDispatch({ type: "SHOW", payload: "✅ مخاطب با موفقیت حذف شد" });
    toastHideFa(toastDispatch);
    setShowModal(false);
  };

  const selectHandler = () => {
    const nextValue = !isSelect;
    setIsSelect(nextValue);

    setAllItemSelected((selecteds) =>
      nextValue
        ? [...selecteds, item]
        : selecteds.filter((i) => i.id !== item.id),
    );
  };

  return (
    <>
      <div className={styles.contact}>
        <div className={styles.contactInfo}>
          <h3>{item.contactName}</h3>
          <h4>{item.email}</h4>
        </div>

        <div className={styles.contactPhone}>
          <h4>{item.phone}</h4>
        </div>

        <div className={styles.contactButtons}>
          <div className={styles.conteinerButton}>
            <button
              className={styles.editButton}
              onClick={() => setSelectedContacts(item)}
            >
              ویرایش
            </button>

            <button
              className={styles.deleteButton}
              onClick={() => setShowModal(true)}
            >
              حذف
            </button>

            <button className={styles.selectButton} onClick={selectHandler}>
              {isSelect ? (
                <ImCheckboxChecked size={30} color="gray" />
              ) : (
                <ImCheckboxUnchecked size={30} color="gray" />
              )}
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <Modal setShowModal={setShowModal} fn={confirmDeleteHandler} />
      )}
    </>
  );
}

export default Card;
