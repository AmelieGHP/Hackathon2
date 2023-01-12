import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HorseInfo from "./pages/HorseInfo";
import LoginPage from "./pages/LoginPage";
import UserContext from "@components/context/UserContext";

function App() {
  const [user, setUser] = useState("");
  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>

        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/info/:id" element={<HorseInfo />} />
          <Route path="/dashbord" element={<Dashbord />} />

        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
