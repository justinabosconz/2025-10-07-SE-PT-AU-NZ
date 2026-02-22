import { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext();

function UserProvider(props) {
  const [currentUser, setCurrentUser] = useState({});

  function handleUpdateUser(user) {
    setCurrentUser(user);
  }

  return (
    <UserContext.Provider value={{ currentUser, handleUpdateUser }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserProvider;
