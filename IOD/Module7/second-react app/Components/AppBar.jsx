import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const AppBarComponent = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App Bar
        </Typography>

        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Button
            color="inherit"
            component={NavLink}
            to="/"
            style={({ isActive }) => ({ color: isActive ? "red" : "white" })}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={NavLink}
            to="/LoginForm"
            style={({ isActive }) => ({ color: isActive ? "red" : "white" })}
          >
            Login
          </Button>
          <Button
            color="inherit"
            component={NavLink}
            to="/BitcoinRateExercises"
            style={({ isActive }) => ({ color: isActive ? "red" : "white" })}
          >
            BitcoinRates
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
