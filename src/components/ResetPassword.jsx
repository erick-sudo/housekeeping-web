import AppName from "./common/AppName";

import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Container,
  InputAdornment,
  IconButton,
  Alert,
  Divider,
} from "@mui/material";

import { useNavigate } from "react-router";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { ValidationErrors } from "./common/ValidationErrors";

const styles = {
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

const ResetPassword = () => {
  const [passwordErrors, setPasswordErrors] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    confirm_new_password: "",
  });
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // handleLogin({
    //   payload: {
    //     ...formData,
    //     grant_type: "user",
    //   },
    //   errorCallback: (err) => {
    //     setPasswordErrors(err?.errors);
    //   },
    // });
  }

  return (
    <div className="flex fixed inset-0 justify-center items-center">
      <Container maxWidth="xs" className={`px-4 m-4`}>
        <div className="flex justify-center py-8">
          <AppName />
        </div>
        <div className="mb-6">
          <Typography className="text-center" component="h1" variant="h5">
            Reset your password
          </Typography>
        </div>

        {passwordErrors && (
          <div className="py-4 gap-2 grid">
            {passwordErrors?.password && (
              <Alert severity="error">
                <ValidationErrors
                  errors={passwordErrors}
                  errorsKey="password"
                />
              </Alert>
            )}
          </div>
        )}

        <Divider />

        <form onSubmit={handleSubmit} sx={styles.form}>
          <TextField
            value={formData.password}
            onChange={handleChange}
            sx={styles.textField}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Create new password"
            type={showPassword ? "text" : "password"}
            id="password"
            autoComplete="password"
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
          <TextField
            value={formData.password}
            onChange={handleChange}
            sx={styles.textField}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirm_new_password"
            label="Confirm new password"
            type={showPassword ? "text" : "password"}
            id="confirm_new_password"
            autoComplete="confirm_new_password"
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={styles.submit}
          >
            Save password & login
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default ResetPassword;
