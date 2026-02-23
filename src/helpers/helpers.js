// const toastShow = (setToastState, text) => {
//   setToastState({ text: text, isShow: true });
//   setTimeout(() => {
//     setToastState({ text: "", isShow: false });
//   }, 3500);
// };
const toastHideFa = (toastDispatch) => {
  setTimeout(() => {
    toastDispatch({ type: "HIDE" });
  }, 3000);
};
export { toastHideFa };
