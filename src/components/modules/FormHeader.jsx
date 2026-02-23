import { useState, useContext } from "react";
import styles from "./styles/formHeader.module.css";
import { ContactsContext } from "../../context/contexts";

function FormHeader({ setToastState, selectedContact }) {
  const { dispatch } = useContext(ContactsContext);

  const [formData, setFormData] = useState({
    contactName: selectedContact?.contactName || "",
    phone: selectedContact?.phone || "",
    email: selectedContact?.email || "",
  });

  const showToast = (text) => {
    setToastState({ text, isShow: true });
    setTimeout(() => setToastState({ text: "", isShow: false }), 3500);
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (
      formData.contactName.length <= 6 ||
      formData.email.length <= 7 ||
      formData.phone.length < 11
    ) {
      return showToast("😡 مقادیر معتبر وارد کنید !");
    }

    if (selectedContact) {
      dispatch({
        type: "EDIT_CONTACT",
        payload: { ...formData, id: selectedContact.id },
      });
      showToast("✅ مخاطب با موفقیت ویرایش شد");
    } else {
      dispatch({ type: "ADD_CONTACT", payload: formData });
      showToast("✅ مخاطب با موفقیت اضافه شد");
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
