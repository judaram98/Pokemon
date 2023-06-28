import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const appRoutes = () => {
  return (
    <Router>
      <div className="h-screen mx-20">
        <Navbar />
        <Routes>{/* <Route path="/" element={<Home />} /> */}</Routes>
      </div>
    </Router>
  );
};

export default appRoutes;
