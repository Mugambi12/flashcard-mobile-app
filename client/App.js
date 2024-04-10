import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import Login from "./Components/Screens/Auth/Login";
import Register from "./Components/Screens/Auth/Register";
import Menu from "./Components/Screens/Navigation/Menu";
import NavBar from "./Components/Screens/Navigation/NavBar";
import Home from "./Components/Screens/Home/Home";
import Money from "./Components/Screens/Money/Money";
import History from "./Components/Screens/History/History";
import Settings from "./Components/Screens/Settings/Settings";
import Profile from "./Components/Screens/Profile/Profile";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [currentScreen, setCurrentScreen] = useState("Home");

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const handleRegister = () => {
    setShowRegister(true);
  };

  const handleBackToLogin = () => {
    setShowRegister(false);
  };

  const navigateToScreen = (screen) => {
    setCurrentScreen(screen);
  };

  return (
    <View style={styles.body}>
      {loggedIn && !showRegister && <Menu />}
      {loggedIn && !showRegister && <NavBar />}
      {!loggedIn && !showRegister ? (
        <Login onLogin={handleLogin} onRegister={handleRegister} />
      ) : showRegister ? (
        <Register onLogin={handleBackToLogin} />
      ) : currentScreen === "Home" ? (
        <Home onLogout={handleLogout} navigateToScreen={navigateToScreen} />
      ) : currentScreen === "Money" ? (
        <Money />
      ) : currentScreen === "History" ? (
        <History />
      ) : currentScreen === "Settings" ? (
        <Settings />
      ) : (
        <Profile />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 0,
    margin: 0,
  },
});
