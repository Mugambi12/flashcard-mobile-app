import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import colors from "../../Styles/Colors";

const NavBar = () => {
  return (
    <View style={styles.navBar}>
      <TouchableOpacity
        style={styles.navBarButton}
        onPress={() => console.log("Home pressed")}
      >
        <Icon name="home" size={24} style={styles.navBarIcon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navBarButton}
        onPress={() => console.log("Money pressed")}
      >
        <Icon name="attach-money" size={24} style={styles.navBarIcon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.navBarButton, styles.historyButton]}
        onPress={() => console.log("History pressed")}
      >
        <Icon name="list" size={24} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navBarButton}
        onPress={() => console.log("Settings pressed")}
      >
        <Icon name="settings" size={24} style={styles.navBarIcon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navBarButton}
        onPress={() => console.log("Profile pressed")}
      >
        <Icon name="person" size={24} style={styles.navBarIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 15,
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: 1,
    backgroundColor: colors.success,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  navBarButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  navBarIcon: {
    color: colors.light,
  },
  historyButton: {
    backgroundColor: colors.black,
    borderRadius: 50,
    padding: 12,
    marginLeft: 10,
  },
});

export default NavBar;
