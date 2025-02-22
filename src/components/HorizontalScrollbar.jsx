import { Box } from "@mui/material";
import React from "react";
import BodyParts from "./BodyParts";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Typography } from "@mui/material";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";
import { useContext } from "react";
import ExerciseCard from "./ExerciseCard";
import "../App.css";
const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography
      onClick={() => scrollPrev()}
      className="right-arrow"
      sx={{
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        marginRight: "10px", // Add margin for spacing
        padding: "10px",
        backgroundColor: "#FF2625",
        borderRadius: "50%",
      }}
    >
      <img src={LeftArrowIcon} alt="left-arrow" style={{ width: "30px" }} />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <Typography
      onClick={() => scrollNext()}
      className="left-arrow"
      sx={{
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        marginLeft: "10px", // Add margin for spacing
        padding: "10px",
        backgroundColor: "#FF2625",
        borderRadius: "50%",
      }}
    >
      <img src={RightArrowIcon} alt="right-arrow" style={{ width: "30px" }} />
    </Typography>
  );
};

function HorizontalScrollbar({ data, BodyPart, setBodyPart, isBodyParts }) {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item, index) => {
        return (
          <Box
            key={item.id || index}
            title={item.id || item}
            sx={{ display: "inline-block" }}
            m="0 20px"
            width="auto"
          >
            {isBodyParts ? (
              <BodyParts
                item={item}
                BodyPart={BodyPart}
                setBodyPart={setBodyPart}
              />
            ) : (
              <ExerciseCard exercise={item} />
            )}
          </Box>
        );
      })}
    </ScrollMenu>
  );
}

export default HorizontalScrollbar;
