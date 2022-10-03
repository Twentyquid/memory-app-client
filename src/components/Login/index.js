import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Box,
  TextField,
  Container,
  Button,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { createUser } from "../../reducers/userSlice";

function Login() {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    passwordVisible: false,
    password: "",
    name: "",
    email: "",
  });
  const theme = createTheme({
    palette: {
      accent: {
        main: "#E7D600",
      },
    },
  });

  const handlePasswordVisibility = () => {
    setValues({ ...values, passwordVisible: !values.passwordVisible });
  };

  const handleChange = (props) => (event) => {
    setValues({ ...values, [props]: event.target.value });
  };

  const handleButton = () => {
    let userdetails = values;
    delete userdetails.passwordVisible;
    dispatch(createUser(userdetails));
    localStorage.setItem("redeem-user-data", userdetails);
  };
  return (
    <div className="">
      <Container maxWidth="sm">
        <h3 className="text-3xl mt-32">Welcome Back</h3>
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
              color="accent"
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Name"
              onChange={handleChange("name")}
              variant="outlined"
            />
            <TextField
              color="accent"
              sx={{ width: "100%", marginTop: "30px" }}
              id="outlined-basic"
              label="Email"
              onChange={handleChange("email")}
              variant="outlined"
            />
            <FormControl
              sx={{ width: "100%", color: "accent", marginTop: "32px" }}
              variant="outlined"
            >
              <InputLabel htmlFor="passwordInput">Password</InputLabel>
              <OutlinedInput
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
            onClick={handleButton}
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
            Login
          </Button>
          <Link to="/signup" className="mt-8 text-gray-700">
            don't have an account ?{" "}
            <span className="text-green-400">signup</span>
          </Link>
        </Box>
      </Container>
    </div>
  );
}

export default Login;
