import Router from "./router/Router";
import "./App.css";
import { UserContext } from "./context/AuthContext";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null)
  return (
    <UserContext.Provider value={{user, setUser}}>
      <Router />
    </UserContext.Provider>
  );
}

export default App;
