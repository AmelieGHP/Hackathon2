import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HorseInfo from "./pages/HorseInfo";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/vehicle" element={<HorseInfo />} />
      </Routes>
    </div>
  );
}

export default App;
