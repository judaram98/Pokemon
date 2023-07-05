import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../components/Home/Home";
import Footer from "../components/Footer/Footer";
import { useState } from "react";

const appRoutes = () => {
  const [next, setNext] = useState(false);
  const [prev, setPrev] = useState(false);

  return (
    <Router>
      <div className="h-screen mx-20">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                prevPage={prev}
                nextPage={next}
                setPrev={setPrev}
                setNext={setNext}
              />
            }
          />
        </Routes>
        <Footer setPrev={setPrev} setNext={setNext} />
      </div>
    </Router>
  );
};

export default appRoutes;
