import React, { useState } from "react";
import styles from "./showContacts.module.css";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";

function Card({
  item,
  setSelectedContacts,
  setToastState,
  setContatcsDb,
  setAllItemSelected,
}) {
  const [isSelect, setIsSelect] = useState(false);

  const deleteHandler = (id) => {
    setContatcsDb((contacts) => contacts.filter((i) => i.id !== id));

    setToastState({
      text: "✅ مخاطب با موفقیت حذف شد",
      isShow: true,
    });
  };

  const selectHandler = () => {
    const nextValue = !isSelect;

    setIsSelect(nextValue);

    setAllItemSelected((selecteds) => {
      if (nextValue) {
        return [...selecteds, item];
      } else {
        return selecteds.filter((i) => i.id !== item.id);
      }
    });
  };

  return (
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
            onClick={() => deleteHandler(item.id)}
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
  );
}

export default Card;
