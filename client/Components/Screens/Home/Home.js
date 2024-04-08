// Home.js

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../../Styles/Main";

const Home = ({ onLogout }) => {
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        {/* Menu items go here */}
        <TouchableOpacity onPress={() => console.log("Menu item 1 pressed")}>
          <Text style={styles.menuItem}>Menu 1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("Menu item 2 pressed")}>
          <Text style={styles.menuItem}>Menu 2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("Menu item 3 pressed")}>
          <Text style={styles.menuItem}>Menu 3</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Home</Text>
      <Text>Welcome to Home Page Eng. Silas Mugambi</Text>
      <Text>This is home page of the personal budgeting app</Text>

      <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>

      <View style={styles.navBar}>
        {/* Navigation bar buttons go here */}
        <TouchableOpacity onPress={() => console.log("Button 1 pressed")}>
          <Text style={styles.navButton}>Button 1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("Button 2 pressed")}>
          <Text style={styles.navButton}>Button 2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("Button 3 pressed")}>
          <Text style={styles.navButton}>Button 3</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("Button 4 pressed")}>
          <Text style={styles.navButton}>Button 4</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("Button 5 pressed")}>
          <Text style={styles.navButton}>Button 5</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
