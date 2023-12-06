import { createContext, useEffect, useState } from "react";

export const userContext = createContext();
export default function UserProvider(Props) {
  const [currentUser, setCurrentUser] = useState({
    status: "signedOut",
    userMail: "",
  });
  const userName = currentUser.userMail.slice(
    0,
    currentUser.userMail.indexOf("@")
  );
  //   For Testing only
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) !== null
      ? JSON.parse(localStorage.getItem("users"))
      : []
  );
  function addUser(newUser) {
    setUsers([...users, newUser]);
  }
  useEffect(
    () => localStorage.setItem("users", JSON.stringify(users)),
    [users]
  );
  return (
    <userContext.Provider
      value={{ currentUser, setCurrentUser, userName, addUser, users }}
    >
      {Props.children}
    </userContext.Provider>
  );
}
