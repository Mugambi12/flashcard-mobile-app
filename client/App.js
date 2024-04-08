import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import Login from "./Components/Screens/Auth/Login";
import Register from "./Components/Screens/Auth/Register";
import Home from "./Components/Screens/Home/Home";

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
    <View style={styles.body}>
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
