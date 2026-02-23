const reducerToast = (_state, action) => {
  switch (action.type) {
    case "SHOW":
      return { text: action.payload, isShow: true };
    case "HIDE":
      return { text: "", isShow: false };

    default:
      throw new Error("invalid action");
  }
};
export default reducerToast;
