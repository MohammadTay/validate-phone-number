import * as React from "react";
import {
  Avatar,
  Button,
  TextField,
  Grid,
  Box,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, updateCurrentUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

export default function Update() {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = currentUser?._id;
  const [user, setUser] = useState({ id });

  const handleName = (e) => setUser({ ...user, costumerName: e.target.value });
  const handleAddress = (e) =>
    setUser({ ...user, costumerAddress: e.target.value });
  const handlePhoneNumb = (e) =>
    setUser({ ...user, phoneNumber: e.target.value });
  const handleEmail = (e) =>
    setUser({ ...user, costumerEmail: e.target.value });
  const handlePwd = (e) => setUser({ ...user, password: e.target.value });

  const handleUpdate = async (e) => {
    e.preventDefault();
    dispatch(updateCurrentUser(user));
    navigate("/");
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    dispatch(deleteUser(`${id}`));
    navigate("/");
  };

  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        UPDATE
      </Typography>
      <Box component="form" noValidate onSubmit={handleUpdate} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-name"
              name="username"
              required
              fullWidth
              id="username"
              label="username"
              autoFocus
              onChange={handleName}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="phone number-name"
              name="phonenumber"
              required
              fullWidth
              id="phonenumber"
              label="phone-number"
              autoFocus
              onChange={handlePhoneNumb}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="address"
              label="living address"
              name="address"
              autoComplete="address"
              onChange={handleAddress}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="email"
              name="email"
              autoComplete="email"
              onChange={handleEmail}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="password"
              type="password"
              id="password"
              autoComplete="new-password"
              onChange={handlePwd}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          UPDATE
        </Button>
      </Box>

      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2, bgcolor: "red" }}
        onClick={handleDelete}
      >
        DELETE
      </Button>
    </Box>
  );
}
