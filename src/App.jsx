import Nav from "./components/Nav";
import Home from "./components/Home";
import Malazem from "./components/Malazem";
import Explan from "./components/Explan";
import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

import StrProg from "./pages/StrProg";
import Cyberscurity from "./pages/Cyberscurity";
import ComputerSkills from "./pages/ComputerSkills";
import Math from "./pages/Math";
import ElectricCircuit from "./pages/ElectricCircuit";

const App = () => {
  return (
    <div>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/malazem" element={<Malazem />} />
        <Route path="/explan" element={<Explan />} />
        <Route path="/structred-programming" element={<StrProg />} />
        <Route path="/cyberscurity" element={<Cyberscurity />} />
        <Route path="/computer-skills" element={<ComputerSkills />} />
        <Route path="/math" element={<Math />} />
        <Route path="/electric-circuit" element={<ElectricCircuit />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
