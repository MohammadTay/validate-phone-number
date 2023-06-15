import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { MuiTelInput, matchIsValidTel } from "mui-tel-input";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import newRequest from "../utils/newRequest";
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";

export default function Login() {
  const [phoneNumb, setPhoneNumb] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await newRequest.post("/auth/login", {
        phoneNumb,
        password,
      });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      dispatch(loginSuccess(res.data));

      navigate(`/`);
    } catch (err) {
      console.log(err);
      dispatch(loginFailure());
    }
  };

  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <Grid item xs={12}>
          <TextField
            autoComplete="phone number-name"
            name="phonenumber"
            required
            fullWidth
            id="phonenumber"
            label="phone number"
            autoFocus
            value={phoneNumb}
            onChange={(e) => setPhoneNumb(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          {" "}
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>

        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link to="/update">forgot password</Link>
          </Grid>
          <Grid item>
            <Link to="/register"> signup</Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
