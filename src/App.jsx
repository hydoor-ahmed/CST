import Nav from "./components/Nav";
import Home from "./components/Home";
import Malazem from "./components/Malazem";
import Explan from "./components/Explan";
import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

import Digital from "./pages/Digital";
import Programming from "./pages/Programming";
import HumanRights from "./pages/HumanRights";
import Math from "./pages/Math";
import Networks from "./pages/Networks";
import EngineeringDrawing from "./pages/EngineeringDrawing";
import ArabicLang from "./pages/ArabicLang";

const App = () => {
  return (
    <div>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/malazem" element={<Malazem />} />
        <Route path="/explan" element={<Explan />} />
        <Route path="/digital-fundamentals" element={<Digital />} />
        <Route path="/programming" element={<Programming />} />
        <Route path="/human-rights" element={<HumanRights />} />
        <Route path="/math" element={<Math />} />
        <Route path="/networks" element={<Networks />} />
        <Route path="/engineering-drawing" element={<EngineeringDrawing />} />
        <Route path="/arabic-language" element={<ArabicLang />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
