import { createContext, useContext, useState } from "react";
import Auth from "./auth";
const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [status, setStatus] = useState(Auth.loggedIn());

  return (
    <UserContext.Provider value={{ status, setStatus }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
