import { createContext } from "react";

const ContactsContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return [...state, { id: Date.now(), ...action.payload }];
    case "DELETE_CONTACT":
      return state.filter((contact) => contact.id !== action.payload.id);
    case "DELETE_ALL_CONTACT":
      return state.filter(
        (i) => !action.payload.some((item) => item.id === i.id),
      );
    case "EDIT_CONTACT": {
      return state.map((i) => {
        return i.id === action.payload.id ? { ...action.payload } : i;
      });
    }
    default:
      throw new Error("ACTION NOT VALID!");
  }
};
export { reducer, ContactsContext };
