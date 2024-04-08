import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Pressable,
} from "react-native";
import Icon from "react-native-ico-material-design";

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
        <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Home</Text>
        <Text>Welcome to Home Page Eng. Silas Mugambi</Text>
        <Text>This is home page of the personal budgeting app</Text>
      </ScrollView>

      <View style={styles.navBar}>
        {/* Navigation bar buttons go here */}
        <TouchableOpacity onPress={() => console.log("Button 1 pressed")}>
          <Text style={styles.navButton}>Home</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "100%",
    padding: 0,
    margin: 0,
  },
  content: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "100%",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 20,
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
    backgroundColor: "#25D366",
    maxWidth: "100%",
  },
  menuItem: {
    fontSize: 16,
    color: "#007bff",
  },
  logoutButton: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderColor: "#ccc",
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: 1,
    backgroundColor: "#fff",
    maxWidth: "100%",
  },
  navButton: {
    fontSize: 16,
    color: "#007bff",
  },
});

export default Home;
