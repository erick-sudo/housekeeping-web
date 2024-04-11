import AppName from "./common/AppName";
import {
  Google,
  Person4Outlined,
  PhoneEnabledOutlined,
} from "@mui/icons-material";

import React, { useState } from "react";
import {
  Button,
  TextField,
  Grid,
  Typography,
  Container,
  InputAdornment,
  IconButton,
  Alert,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

import { NavLink } from "react-router-dom";
import {
  MailOutlineOutlined,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { ValidationErrors } from "./common/ValidationErrors";

const styles = {
  root: {
    position: "fixed",
    inset: 0,
  },
  avatar: {
    margin: "auto",
    width: "48px",
    height: "48px",
    backgroundColor: "rgb(71, 3, 131)",
  },

  submit: {
    margin: "3px 0px 2px",
    backgroundColor: "rgb(71, 3, 131)",
    "&:hover": {
      backgroundColor: "rgb(148, 77, 211)",
    },
  },
  customCheckbox: {
    color: "rgb(71, 3, 131)",
    marginRight: "10px",
    "&.Mui-checked": {
      color: "rgb(71, 3, 131)",
    },
  },
  textField: {
    "& label.Mui-focused": {
      color: "rgb(71, 3, 131)",
    },
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "rgb(148, 77, 211)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "rgb(71, 3, 131)",
      },
    },
  },
};

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [registrationData, setRegistrationData] = useState({});

  const [validationErrors, setValidationErrors] = useState({});

  const handleRegistrationDataChange = (e) => {
    setRegistrationData({
      ...registrationData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAccountCreation = (e) => {
    e.preventDefault();
    startLoading();
    axiosPost(apis.register, {
      ...registrationData,
    })
      .then((res) => {
        stopLoading();
        // snackNotifier(
        //   "Registered successfully. We have sent an email with instructions to activate your account.",
        //   "success",
        //   "top-center"
        // );
        setRegistrationData({});
      })
      .catch((axiosError) => {
        stopLoading();
        if (axiosError?.response?.data?.errors) {
          const errors = axiosError.response.data.errors;
          setValidationErrors(
            Object.keys(errors).reduce((acc, curr) => {
              acc[`phase0#${curr}`] = errors[curr];
              return acc;
            }, {})
          );
        }
      });
  };

  return (
    <div className="flex fixed inset-0 justify-center items-center">
      <Container maxWidth="xs" className={`px-4 m-4`}>
        <div className="flex justify-center py-8">
          <AppName />
        </div>
        <Typography className="text-center" component="h1" variant="h5">
          Sign in
        </Typography>

        <div className="my-4">
          <button className="flex items-center gap-2 rounded-md justify-center w-full py-2 border-1 hover:text-purple-700 hover:border-purple-700 duration-300">
            <Google />
            Continue with google
          </button>
        </div>
        <form onSubmit={handleAccountCreation} className="grid gap-4">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                sx={styles.textField}
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                fullWidth
                error={Boolean(validationErrors["phase0#name"])}
                id="name"
                label="Full Name"
                autoFocus
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton aria-label="phone number" edge="end">
                        <Person4Outlined />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                value={registrationData.name || ""}
                onChange={handleRegistrationDataChange}
              />
              <ValidationErrors
                errorsKey="phase0#name"
                errors={validationErrors}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                sx={styles.textField}
                variant="outlined"
                required
                fullWidth
                error={Boolean(validationErrors["phase0#email"])}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={registrationData.email || ""}
                onChange={handleRegistrationDataChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton aria-label="email icon" edge="end">
                        <MailOutlineOutlined />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <ValidationErrors
                errorsKey="phase0#email"
                errors={validationErrors}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={styles.textField}
                variant="outlined"
                required
                fullWidth
                error={Boolean(validationErrors["phase0#phone_number"])}
                id="phone_number"
                label="Phone Number e.g. 254XXXXXXXXX"
                name="phone_number"
                autoComplete="phone_number"
                value={registrationData.phone_number || ""}
                onChange={handleRegistrationDataChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton aria-label="phone number" edge="end">
                        <PhoneEnabledOutlined />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <ValidationErrors
                errorsKey="phase0#phone_number"
                errors={validationErrors}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={styles.textField}
                variant="outlined"
                required
                fullWidth
                error={Boolean(validationErrors["phase0#password"])}
                name="password"
                label="Password"
                id="password"
                autoComplete="current-password"
                value={registrationData.password || ""}
                onChange={handleRegistrationDataChange}
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                sx={styles.textField}
                required
                fullWidth
                error={Boolean(validationErrors["phase0#password"])}
                name="password_confirmation"
                label="Confirm Password"
                type={showPassword ? "text" : "password"}
                id="password_confirmation"
                autoComplete="current-password"
                value={registrationData.password_confirmation || ""}
                onChange={handleRegistrationDataChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <ValidationErrors
                errorsKey="phase0#password"
                errors={validationErrors}
              />
            </Grid>
          </Grid>

          <Grid container>
            <div className="flex items-start">
              <FormControlLabel
                control={
                  <Checkbox
                    value="allowExtraEmails"
                    sx={styles.customCheckbox}
                  />
                }
              />
              <div>
                I agree to the{" "}
                <NavLink
                  className="hover:text-purple-800 text-purple-600 text-center mx-auto"
                  to="/forgotpassword"
                  variant="body2"
                >
                  Terms of Service
                </NavLink>{" "}
                and{" "}
                <NavLink
                  className="hover:text-purple-800 text-purple-600 text-center mx-auto"
                  to="/forgotpassword"
                  variant="body2"
                >
                  Privacy Policy
                </NavLink>
              </div>
            </div>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={styles.submit}
          >
            Continue
          </Button>
          <Grid container>
            <NavLink
              className="hover:text-purple-800 text-purple-600 text-center mt-4 mx-auto"
              to="/login"
              variant="body2"
            >
              Already have an account? Sign in
            </NavLink>
          </Grid>
        </form>
      </Container>
    </div>
  );
};

export default Signup;
