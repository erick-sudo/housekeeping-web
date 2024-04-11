import AppName from "./common/AppName";

import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Divider,
} from "@mui/material";

import {
  MailOutlineOutlined,
} from "@mui/icons-material";

const styles = {
  submit: {
    margin: "3px 0px 2px",
    backgroundColor: "rgb(71, 3, 131)",
    "&:hover": {
      backgroundColor: "rgb(148, 77, 211)",
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

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="flex fixed inset-0 justify-center items-center">
      <div className={`px-4 m-4 max-w-sm`}>
        <div className="flex justify-center py-8">
          <AppName />
        </div>
        <div className="mb-6">
          <Typography className="text-center" component="h1" variant="h5">
            Forgot password
          </Typography>
        </div>

        <div className="mb-6">
          <Typography className="text-center" component="div" variant="div">
            Enter the email you use for the account and we'll send you a reset
            password link
          </Typography>
        </div>

        <Divider />

        <form className="mb-4 grid gap-4" onSubmit={handleSubmit} sx={styles.form}>
          <TextField
            sx={styles.textField}
            variant="outlined"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={formData.email || ""}
            onChange={handleChange}
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={styles.submit}
          >
            Email me my reset link
          </Button>
        </form>
        <div className="mb-6">
          <Typography className="text-center" component="div" variant="div">
            If you don't see your reset password email link, please check your
            spam folder
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
