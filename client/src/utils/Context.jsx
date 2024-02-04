import { createContext, useContext, useState } from "react";
import Auth from "./auth";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "./queries";
const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [status, setStatus] = useState(Auth.loggedIn());
  const [admin] = useState(Auth.isAdmin());

  return (
    <UserContext.Provider value={{ status, setStatus, admin }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
