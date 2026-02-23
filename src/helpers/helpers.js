
const toastShow = (setToastState, text) => {
  setToastState({ text: text, isShow: true });
  setTimeout(() => {
    setToastState({ text: "", isShow: false });
  }, 3500);
};
export {  toastShow };
