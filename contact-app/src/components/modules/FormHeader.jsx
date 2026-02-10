import React, { useEffect } from "react";
import styles from "./styles/formHeader.module.css";
import { useState } from "react";
import { inputChange } from "../../helpers/helpers";

function FormHeader({ setContactsDb, setToastState, selectedContact }) {
  const [formData, setFormData] = useState({
    contactName: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    if (selectedContact) {
      setFormData({
        contactName: selectedContact.contactName || "",
        phone: selectedContact.phone || "",
        email: selectedContact.email || "",
      });
    }
  }, [selectedContact]);

  const submitForm = (e) => {
    e.preventDefault();

    if (
      formData.contactName.length <= 6 ||
      formData.email.length <= 7 ||
      formData.phone.length < 11
    ) {
      setToastState({
        text: "😡 مقادیر معتبر وارد کنید !",
        isShow: true,
      });
      return setTimeout(() => {
        setToastState({ text: "", isShow: false });
      }, 3500);
    }

    if (selectedContact) {
      setContactsDb((contacts) => {
        const updatedContacts = contacts.map((contact) =>
          contact.id === selectedContact.id
            ? { ...formData, id: selectedContact.id } // حفظ ID اصلی
            : contact,
        );
        return updatedContacts;
      });

      setToastState({
        text: "✅ مخاطب با موفقیت ویرایش شد",
        isShow: true,
      });
      setTimeout(() => {
        setToastState({ text: "", isShow: false });
      }, 3500);
    } else {
      setContactsDb((contacts) => [
        ...contacts,
        { ...formData, id: Math.floor(Math.random() * 1000) + 1 },
      ]);

      setToastState({
        text: "✅ مخاطب با موفقیت اضافه شد",
        isShow: true,
      });
      setTimeout(() => {
        setToastState({ text: "", isShow: false });
      }, 3500);
    }

    setFormData({
      contactName: "",
      phone: "",
      email: "",
    });
  };

  return (
    <form className={styles.container} onSubmit={submitForm}>
      <div className={styles.inputsContainer}>
        <div className={styles.input}>
          <input
            type="text"
            name="contactName"
            onChange={(e) => inputChange(e, setFormData)}
            placeholder="نام و نام خانوادگی ..."
            minLength={7}
            value={formData.contactName || ""}
          />
          <span>لطفا مقادیر معتبر وارد کنید !</span>
        </div>
        <div className={styles.input}>
          <input
            type="text"
            name="phone"
            onChange={(e) => inputChange(e, setFormData)}
            placeholder="شماره تماس ..."
            minLength={11}
            maxLength={11}
            value={formData.phone || ""}
          />
          <span>لطفا شماره معتبر وارد کنید !</span>
        </div>
        <div className={styles.input}>
          <input
            type="email"
            name="email"
            onChange={(e) => inputChange(e, setFormData)}
            placeholder="ایمیل ..."
            minLength={7}
            value={formData.email || ""}
          />
          <span>لطفا ایمیل معتبر وارد کنید !</span>
        </div>
      </div>
      <button type="submit">
        {selectedContact ? "ویرایش مخاطب" : "افزودن مخاطب"}
      </button>
    </form>
  );
}

export default FormHeader;
