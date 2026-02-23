import { useReducer } from "react";
import { Context, reducerContacts } from "./contexts";
import reducerToast from "./toastContext";

function Provider({ children }) {
  const initialState = JSON.parse(localStorage.getItem("contactsDB")) || [];

  const [contactsState, contactsDispatch] = useReducer(
    reducerContacts,
    initialState,
  );

  const [toastState, toastDispatch] = useReducer(reducerToast, {
    text: "",
    isShow: false,
  });

  return (
    <Context.Provider
      value={{
        contacts: contactsState,
        contactsDispatch,
        toast: toastState,
        toastDispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Provider;
