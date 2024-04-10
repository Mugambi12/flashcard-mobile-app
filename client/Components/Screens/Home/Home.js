import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import colors from "../../Styles/Colors";

const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.title}>Dashboard</Text>

        {renderCard("attach-money", "Budget", "KES 2000")}
        {renderCard("money-off", "Expenses", "KES 1500")}
        {renderCard("account-balance", "Savings", "KES 500")}

        {renderChartSection()}
        {renderReportSection()}
        {renderTransactionSection()}
      </ScrollView>
    </View>
  );
};

const renderCard = (icon, title, value) => (
  <View style={styles.card}>
    <Icon name={icon} style={styles.cardIcons}></Icon>
    <View style={styles.cardContent}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardValue}>{value}</Text>
    </View>
  </View>
);

const renderChartSection = () => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Visuals</Text>

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
    <Text>No reports available</Text>
  </View>
);

const renderTransactionSection = () => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Recent Transactions</Text>
    <Text>No recent transactions</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  scrollViewContent: {
    paddingTop: 170,
    paddingBottom: 70,
    paddingHorizontal: 10,
    minWidth: "100%",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  card: {
    flexDirection: "row",
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
  cardIcons: {
    fontSize: 40,
    color: colors.primary,
  },
  cardContent: {
    marginLeft: 20,
  },
  cardTitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  cardValue: {
    fontSize: 20,
    fontWeight: "bold",
  },
  section: {
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
});

export default Home;
