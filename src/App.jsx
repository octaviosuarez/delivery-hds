import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/login";
import toast, { Toaster } from "react-hot-toast";
import AppContext from "./AppContext";
import Ordenes from "./components/ordenes/ordenes";

function App() {
  const [count, setCount] = useState(0);
  const [login, setLogin] = useState(false);
  const [section, setSection] = useState({
    section: "Inicio",
    chipSelected: null,
  });

  return (
    <AppContext.Provider value={{ section, setSection }}>
      <div>
        {!login ? (
          <div className="h-screen flex justify-center items-center">
            <Login setLogin={setLogin} toast={toast} />
        </div>
        ) : (
          <Router>
            <div className="flex p-5 gap-5 h-[calc(100vh-5px)]">
              <div className="w-full">
                <Ordenes />
              </div>
            </div>
          </Router>
        )}
        <Toaster position="top-right" />
      </div>
    </AppContext.Provider>
  );
}

export default App;
