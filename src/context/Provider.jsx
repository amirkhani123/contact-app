import { useReducer } from "react";
import { reducer } from "./contexts";
import { ContactsContext } from "./contexts";

function Provider({ children }) {
  const initalState = JSON.parse(localStorage.getItem("contactsDB")) || [];
  const [state, dispatch] = useReducer(reducer, initalState);

  return (
    <ContactsContext.Provider value={{ contacts: state, dispatch }}>
      {children}
    </ContactsContext.Provider>
  );
}

export default Provider;
