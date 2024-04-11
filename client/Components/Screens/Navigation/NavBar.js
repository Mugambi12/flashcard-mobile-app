import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import colors from "../../Styles/Colors";

const NavBar = ({ navigateToScreen, currentScreen }) => {
  return (
    <View style={styles.navBar}>
      <TouchableOpacity
        style={styles.navBarButton}
        onPress={() => navigateToScreen("Home")}
      >
        <Icon
          name="home"
          size={24}
          style={[
            styles.navBarIcon,
            currentScreen === "Home" && styles.navBarIconActive,
          ]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navBarButton}
        onPress={() => navigateToScreen("Money")}
      >
        <Icon
          name="attach-money"
          size={24}
          style={[
            styles.navBarIcon,
            currentScreen === "Money" && styles.navBarIconActive,
          ]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.navBarButton, styles.historyButton]}
        onPress={() => navigateToScreen("History")}
      >
        <Icon
          name="list"
          size={24}
          color={colors.light}
          style={[currentScreen === "History" && styles.navBarIconActive]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navBarButton}
        onPress={() => navigateToScreen("Settings")}
      >
        <Icon
          name="settings"
          size={24}
          style={[
            styles.navBarIcon,
            currentScreen === "Settings" && styles.navBarIconActive,
          ]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navBarButton}
        onPress={() => navigateToScreen("Profile")}
      >
        <Icon
          name="person"
          size={24}
          style={[
            styles.navBarIcon,
            currentScreen === "Profile" && styles.navBarIconActive,
          ]}
        />
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
    backgroundColor: colors.black,
    backgroundGradientFrom: colors.primary,
    backgroundGradientTo: colors.secondary,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  navBarButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  navBarIcon: {
    color: colors.light,
  },
  navBarIconActive: {
    color: colors.primary,
  },
  historyButton: {
    backgroundColor: colors.secondary,
    borderRadius: 50,
    padding: 12,
    marginLeft: 10,
  },
});

export default NavBar;
