import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Explore from "../pages/Explore";
import Contact from "../pages/Contact";

const App = () => {
        
    return(
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/explore" element={<Explore />} />
                </Routes>
            </Router>

        </>     
    )
}

export default App;