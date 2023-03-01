import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import Gpa from "./pages/gpa/Gpa";
import Cgpa from "./pages/cgpa/Cgpa";

const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/gpa" element={<Gpa />} />
        <Route path="/cgpa" element={<Cgpa />} />
      </Routes>
    </div>
  );
};

export default App;
