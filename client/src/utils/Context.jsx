import { createContext, useState } from "react";
import Auth from "./auth";
export const Context = createContext();

const UserProvider = ({ children }) => {
  const [status, setStatus] = useState(Auth.loggedIn());

  return (
    <Context.Provider value={{ status, setStatus }}>
      {children}
    </Context.Provider>
  );
};

export default UserProvider;
