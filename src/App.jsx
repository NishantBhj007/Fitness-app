import React from "react";
import "./App.css";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetails.jsx";
function App() {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
