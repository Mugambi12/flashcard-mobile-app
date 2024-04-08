import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Colors } from "react-native/Libraries/NewAppScreen";

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

        {renderChartSection()}
        {renderReportSection()}
        {renderTransactionSection()}
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

const renderChartSection = () => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Charts</Text>

    <View style={styles.chartContainer}>
      <Text style={styles.chartTitle}>Charts Title Goes Here</Text>
      <Text style={styles.chartSubTitle}>Charts Title Goes Here</Text>
      {/* Dummy chart component */}
      <View style={styles.chart}></View>
    </View>

    <View style={styles.chartContainer}>
      <Text style={styles.chartTitle}>Charts Title Goes Here</Text>
      <Text style={styles.chartSubTitle}>Charts Title Goes Here</Text>
      {/* Dummy chart component */}
      <View style={styles.chart}></View>
    </View>

    <View style={styles.chartContainer}>
      <Text style={styles.chartTitle}>Charts Title Goes Here</Text>
      <Text style={styles.chartSubTitle}>Charts Title Goes Here</Text>
      {/* Dummy chart component */}
      <View style={styles.chart}></View>
    </View>
  </View>
);

const renderReportSection = () => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Reports</Text>
    {/* Placeholder for reports */}
    <Text>No reports available</Text>
  </View>
);

const renderTransactionSection = () => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Recent Transactions</Text>
    {/* Placeholder for recent transactions */}
    <Text>No recent transactions</Text>
  </View>
);

const colors = {
  primary: "#007bff",
  secondary: "#6c757d",
  success: "#28a745",
  danger: "#dc3545",
  warning: "#ffc107",
  info: "#17a2b8",
  light: "#f8f9fa",
  dark: "#343a40",
  black: "#000",
  white: "#fff",
  borderColor: "#ced4da",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
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
    color: colors.white,
    backgroundColor: colors.success,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  content: {
    flexGrow: 1,
    width: "100%",
    maxWidth: "100%",
    minWidth: "100%",
    paddingTop: 100,
    paddingBottom: 70,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  card: {
    backgroundColor: colors.white,
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: colors.black,
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
    backgroundColor: Colors.white,
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: colors.black,
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
  chartContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  chartTitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  chartSubTitle: {
    fontSize: 14,
    fontStyle: "italic",
    marginBottom: 10,
  },
  chart: {
    width: "100%",
    height: 200,
    backgroundColor: colors.light,
  },
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
    backgroundColor: colors.light,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  historyButton: {
    backgroundColor: colors.primary,
    borderRadius: 50,
    padding: 6,
    marginTop: -12,
  },
});

export default Home;
