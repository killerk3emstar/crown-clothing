import { createContext, useState } from "react";

// accual value we access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  if (currentUser) {
    console.log(`logged as ${currentUser.email}`);
  } else {
    console.log("logged out");
  }
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
