import { useState, useContext } from "react";
import styles from "./styles/formHeader.module.css";
import { Context } from "../../context/contexts";
import { toastHideFa } from "../../helpers/helpers";

function FormHeader({ selectedContact }) {
  const { contactsDispatch, toastDispatch } = useContext(Context);

  const [formData, setFormData] = useState({
    contactName: selectedContact?.contactName || "",
    phone: selectedContact?.phone || "",
    email: selectedContact?.email || "",
  });

  const submitForm = (e) => {
    e.preventDefault();

    if (
      formData.contactName.length <= 6 ||
      formData.email.length <= 7 ||
      formData.phone.length < 11
    ) {
      toastDispatch({ type: "SHOW", payload: "😡 مقادیر معتبر وارد کنید " });
      toastHideFa(toastDispatch);
    }

    if (selectedContact) {
      contactsDispatch({
        type: "EDIT_CONTACT",
        payload: { ...formData, id: selectedContact.id },
      });
      toastDispatch({ type: "SHOW", payload: "✅ مخاطب با موفقیت ویرایش شد" });
      toastHideFa(toastDispatch);
    } else {
      contactsDispatch({ type: "ADD_CONTACT", payload: formData });
      toastDispatch({ type: "SHOW", payload: "✅ مخاطب با موفقیت اضافه شد" });
      toastHideFa(toastDispatch);
    }

    setFormData({ contactName: "", phone: "", email: "" });
  };

  return (
    <form className={styles.container} onSubmit={submitForm}>
      {["contactName", "phone", "email"].map((field) => (
        <div className={styles.input} key={field}>
          <input
            type={field === "email" ? "email" : "text"}
            name={field}
            value={formData[field]}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            placeholder={
              field === "contactName"
                ? "نام و نام خانوادگی ..."
                : field === "phone"
                  ? "شماره تماس ..."
                  : "ایمیل ..."
            }
            minLength={field === "phone" ? 11 : 7}
            maxLength={field === "phone" ? 11 : undefined}
          />
          <span>
            لطفا
            {field === "contactName"
              ? "مقادیر معتبر"
              : field === "phone"
                ? "شماره معتبر"
                : "ایمیل معتبر"}
            وارد کنید !
          </span>
        </div>
      ))}
      <button type="submit">
        {selectedContact ? "ویرایش مخاطب" : "افزودن مخاطب"}
      </button>
    </form>
  );
}

export default FormHeader;
