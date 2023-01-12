import { Route, Routes } from "react-router-dom";
import Dashbord from "@pages/Dashbord";
import Home from "./pages/Home";
import HorseInfo from "./pages/HorseInfo";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/info/:id" element={<HorseInfo />} />
        <Route path="/dashbord" element={<Dashbord />} />
      </Routes>
    </div>
  );
}

export default App;
