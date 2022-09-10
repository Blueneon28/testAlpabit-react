import { createContext, useReducer } from "react";

import appReducer from "./reducers";

const initialState = {
  contacts: [
    {
      id: 1,
      name: "John",
      number: "081122334499",
      email: "johndoe@mail.com",
    },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  function addContact(contact) {
    dispatch({
      type: "ADD_CONTACT",
      payload: contact,
    });
  }

  function editContact(contact) {
    dispatch({
      type: "EDIT_CONTACT",
      payload: contact,
    });
  }

  function removeContact(id) {
    dispatch({
      type: "REMOVE_CONTACT",
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
        editContact,
        removeContact,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
