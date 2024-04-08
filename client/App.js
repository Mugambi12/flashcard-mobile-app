import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Login from "./Components/Screens/Auth/Login";
import Register from "./Components/Screens/Auth/Register";
import Home from "./Components/Screens/Home/Home";
import styles from "./Components/Styles/Main";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLogin = () => {
    // Perform authentication logic here
    // For now, simply set loggedIn to true
    setLoggedIn(true);
  };

  const handleLogout = () => {
    // Perform logout logic here
    // For now, simply set loggedIn to false
    setLoggedIn(false);
  };

  const handleRegister = () => {
    setShowRegister(true);
  };

  const handleBackToLogin = () => {
    setShowRegister(false);
  };

  return (
    <View style={styles.container}>
      {!loggedIn && !showRegister ? (
        <Login onLogin={handleLogin} onRegister={handleRegister} />
      ) : showRegister ? (
        <Register onLogin={handleBackToLogin} />
      ) : (
        <Home onLogout={handleLogout} />
      )}
      <StatusBar style="auto" />
    </View>
  );
}
