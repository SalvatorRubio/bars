import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    sessionStorage.getItem("userName") ? sessionStorage.getItem("userName") : ""
  );
  const [role, setRole] = useState(
    sessionStorage.getItem("role") ? sessionStorage.getItem("role") : ""
  );
  const [id, setId] = useState(
    sessionStorage.getItem("id") ? sessionStorage.getItem("id") : ""
  );
  const [group, setGroup] = useState(
    sessionStorage.getItem("group") ? sessionStorage.getItem("group") : ""
  );

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
