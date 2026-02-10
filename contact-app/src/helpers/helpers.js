const inputChange = (e, setFormData) => {
  setFormData((form) => ({ ...form, [e.target.name]: e.target.value }));
};
const toastShow = (setToastState, text) => {
  setToastState({ text: text, isShow: true });
  setTimeout(() => {
    setToastState({ text: "", isShow: false });
  }, 3500);
};
export { inputChange, toastShow };
