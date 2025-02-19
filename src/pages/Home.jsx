import React from "react";
import HeroBanner from "./HeroBanner";
import { Box } from "@mui/material";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";
import { useState } from "react";
function Home() {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setBodyPart={setBodyPart}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
}

export default Home;
