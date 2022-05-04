import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("Ильченко Матвей Олегович");
  const [role, setRole] = useState(4);
  const [id, setId] = useState(1);
  // const [group, setGroup] = useState(
  //   sessionStorage.getItem("group") ? sessionStorage.getItem("group") : ""
  // );
  const [group, setGroup] = useState(1);

  const singin = (user, id, role, cb) => {
    setUser(user);
    setRole(role);
    setId(id);
    cb();
  };

  const singout = (cb) => {
    setUser(null);
    setRole(null);
    setId(null);
    cb();
  };

  const value = { user, role, id, singin, singout, group, setGroup };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
