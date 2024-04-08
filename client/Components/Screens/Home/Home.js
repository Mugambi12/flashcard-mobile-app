import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Home = ({ onLogout }) => {
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => console.log("Menu pressed")}>
          <Icon name="menu" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onLogout}>
          <Icon name="logout" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Dashboard</Text>

        {renderCard("Budget", "$2000")}
        {renderCard("Expenses", "$1500")}
        {renderCard("Savings", "$500")}

        {renderSection("Charts", "Placeholder for charts")}
        {renderSection("Reports", "Placeholder for reports")}
        {renderSection(
          "Recent Transactions",
          "Placeholder for recent transactions"
        )}
      </ScrollView>

      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => console.log("Home pressed")}>
          <Icon name="home" size={24} color="#007bff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("Money pressed")}>
          <Icon name="attach-money" size={24} color="#007bff" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log("History pressed")}
          style={styles.historyButton}
        >
          <Icon name="list" size={36} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("Settings pressed")}>
          <Icon name="settings" size={24} color="#007bff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("Profile pressed")}>
          <Icon name="person" size={24} color="#007bff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const renderCard = (title, value) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardValue}>{value}</Text>
  </View>
);

const renderSection = (title, placeholder) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <Text>{placeholder}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "100%",
    minWidth: "100%",
  },

  /* Menu at the top of the screen */
  menu: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
    backgroundColor: "#25D366",
    maxWidth: "100%",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)",
  },

  /* Main content area */
  content: {
    flexGrow: 1,
    maxWidth: "100%",
    minWidth: "100%",
    paddingTop: 100,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#f0f0f0",
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  cardValue: {
    fontSize: 24,
    fontWeight: "bold",
  },

  section: {
    backgroundColor: "#fff",
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  /* Navigation bar at the bottom of the screen */
  navBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 20,
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: 1,
    backgroundColor: "#fff",
    maxWidth: "100%",
  },
  historyButton: {
    backgroundColor: "#25D366",
    borderRadius: 50,
    padding: 6,
    marginTop: -12,
  },
});

export default Home;
