import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Welcome from "./pages/Welcome";
import Classes from "./pages/Classes";
import Instructors from "./pages/Instructors";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/instructors" element={<Instructors />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
