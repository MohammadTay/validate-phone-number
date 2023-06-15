import {
  AccountBox,
  Article,
  ExitToAppOutlined,
  Group,
  Home,
  ModeNight,
  Person,
  Rotate90DegreesCcw,
  Settings,
  Storefront,
  TextRotationAngledown,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginSuccess } from "../redux/userSlice";

const Sidebar = ({ mode, setMode }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const handleLogout = () => {
    localStorage.setItem("currentUser", null);
    dispatch(loginSuccess(""));
    navigate("/");
  };
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <Link to="/">
            <ListItem disablePadding>
              <ListItemButton component="a">
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Homepage" />
              </ListItemButton>
            </ListItem>
          </Link>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Article />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>

          <Link to="/update">
            <ListItem disablePadding>
              <ListItemButton component="a">
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItemButton>
            </ListItem>
          </Link>

          {currentUser ? (
            <>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                  <ListItemIcon>
                    <AccountBox />
                  </ListItemIcon>
                  <ListItemText primary={currentUser?.costumerName} />
                </ListItemButton>
              </ListItem>
              <Link onClick={handleLogout}>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="#simple-list">
                    <ListItemIcon dir="ltr" sx={{}}>
                      <ExitToAppOutlined sx={{ color: "blue" }} />
                    </ListItemIcon>
                    <ListItemText primary="logout" />
                  </ListItemButton>
                </ListItem>
              </Link>
            </>
          ) : (
            <Link to="/login">
              <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                  <ListItemIcon dir="ltr" sx={{}}>
                    <ExitToAppOutlined sx={{ color: "red" }} />
                  </ListItemIcon>
                  <ListItemText primary="login" />
                </ListItemButton>
              </ListItem>
            </Link>
          )}

          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch
                onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
