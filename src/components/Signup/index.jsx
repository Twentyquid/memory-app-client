import React, { useState } from "react";
import {
  Box,
  TextField,
  Container,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";

import { VisibilityOff, Visibility } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";

function Signup() {
  const theme = createTheme({
    palette: {
      accent: {
        main: "#E7D600",
      },
    },
  });

  const [values, setValues] = useState({
    passwordVisible: false,
    password: "",
    name: "",
    email: "",
  });
  const handlePasswordVisibility = () => {
    setValues({ ...values, passwordVisible: !values.passwordVisible });
  };

  const handleChange = (props) => (event) => {
    setValues({ ...values, [props]: event.target.value });
  };
  return (
    <div className="">
      <Container maxWidth="sm">
        <h3 className="text-3xl mt-32">Get Started</h3>
        <Box
          component="form"
          sx={{
            marginTop: "54px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ThemeProvider theme={theme}>
            <TextField
              onChange={handleChange("name")}
              value={values.name}
              color="accent"
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Name"
              variant="outlined"
            />
            <TextField
              onChange={handleChange("email")}
              value={values.email}
              type="email"
              color="accent"
              sx={{ width: "100%", marginTop: "30px" }}
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
            <FormControl
              sx={{ width: "100%", color: "accent", marginTop: "32px" }}
              variant="outlined"
            >
              <InputLabel htmlFor="passwordInput">Password</InputLabel>
              <OutlinedInput
                value={values.password}
                onChange={handleChange("password")}
                type={values.passwordVisible ? "text" : "password"}
                label="Password"
                id="passwordInput"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={handlePasswordVisibility} edge="end">
                      {values.passwordVisible ? (
                        <VisibilityOff></VisibilityOff>
                      ) : (
                        <Visibility></Visibility>
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              ></OutlinedInput>
            </FormControl>
          </ThemeProvider>

          <Button
            sx={{
              backgroundColor: "#E7D600",
              width: "185px",
              borderRadius: "10px",
              padding: "13px 24px",
              fontSize: "14px",
              color: "#17280f",
              marginTop: "30px",
            }}
            variant="contained"
          >
            Sign Up
          </Button>
          <Link to="/login" className="mt-8 text-gray-700">
            already have an account ?{" "}
            <span className="text-green-400">login</span>
          </Link>
        </Box>
      </Container>
    </div>
  );
}

export default Signup;
