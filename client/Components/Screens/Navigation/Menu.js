import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import colors from "../../Styles/Colors";

const Menu = ({ onLogout }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = (event) => {
    if (event.nativeEvent.contentOffset.y > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return (
    <View style={styles.menu}>
      <View style={styles.menuHeader}>
        <TouchableOpacity onPress={() => console.log("Logo pressed")}>
          <Text style={styles.menuTitle}>Kipawa</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onLogout}>
          <Icon name="logout" size={24} color={colors.danger} />
        </TouchableOpacity>
      </View>
      {!isScrolled && (
        <View style={styles.menuBody}>
          <Text style={styles.menuSubTitle}>Account Balance</Text>
          <Text style={styles.menuTitle}>KES 100,500.00</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
    backgroundColor: colors.light,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  menuHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 10,
    color: colors.white,
  },
  menuBody: {
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 20,
    color: colors.white,
  },
  menuTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  menuSubTitle: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default Menu;
