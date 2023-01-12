import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import UserContext from "@components/context/UserContext";
import Dashboard from "./pages/Dashboard";
import HorseInfo from "./pages/HorseInfo";
import LoginPage from "./pages/LoginPage";
import HorseList from "./pages/HorseList";

function App() {
  const [user, setUser] = useState("");
  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/info/:id" element={<HorseInfo />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/horseList" element={<HorseList />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
