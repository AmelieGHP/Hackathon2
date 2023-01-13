import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import UserContext from "./components/context/UserContext";
import Dashboard from "./pages/Dashboard";
import HorseInfo from "./pages/HorseInfo";
import HorseList from "./pages/HorseList";
import LoginPage from "./pages/LoginPage";
import Header from "@components/Header";
import BannerImage from "@assets/black-mount-background-image.jpg";

function App() {
  const [user, setUser] = useState("");
  return (
    <div className="App">
      <Header />
      <div className="rightContainer">
        <div className="bannerImage">
          <img src={BannerImage} alt="Banner Image" />
        </div>
        <div className="componentsContainer">
          <UserContext.Provider value={{ user, setUser }}>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/info/:id" element={<HorseInfo />} />
              <Route path="/home" element={<Dashboard />} />
              <Route path="/horseList" element={<HorseList />} />
            </Routes>
          </UserContext.Provider>
        </div>

      </div>
    </div>
  );
}

export default App;
