import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { Paper, Button } from "@mui/material";
import background from "../../images/getstarted.png";

function GetStarted() {
  return (
    <div>
      <Box>
        <Paper
          sx={{
            backgroundImage: `url(${background})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "57vh",
            bgcolor: "#3d7b5a",
            borderRadius: "0px",
            borderBottomLeftRadius: "42px",
            borderBottomRightRadius: "42px",
          }}
          elevation={3}
        ></Paper>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2 className="text-4xl font-normal text-center mt-10">
            Your
            <br />
            Social Media
          </h2>
          <p className="text-center mx-12 my-8 font-medium text-gray-700">
            The social media that is does not make you feel miserable. It guides
            you to live a better and fulfilling life withot worries.
          </p>
          <Link to="/signup">
            <Button
              sx={{
                backgroundColor: "#E7D600",
                width: "185px",
                borderRadius: "10px",
                padding: "13px 24px",
                fontSize: "14px",
                color: "#17280f",
              }}
              variant="contained"
            >
              Get Started
            </Button>
          </Link>
        </Box>
      </Box>
    </div>
  );
}

export default GetStarted;
