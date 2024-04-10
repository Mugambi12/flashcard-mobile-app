import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import colors from "../../Styles/Colors";

const Home = ({ onLogout }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = (event) => {
    if (event.nativeEvent.contentOffset.y > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <Text style={styles.title}>Dashboard</Text>

        {renderCard("Budget", "$2000")}
        {renderCard("Expenses", "$1500")}
        {renderCard("Savings", "$500")}

        {renderChartSection()}
        {renderReportSection()}
        {renderTransactionSection()}
      </ScrollView>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
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

  content: {
    flexGrow: 1,
    width: "100%",
    maxWidth: "100%",
    minWidth: "100%",
    paddingTop: 170,
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

export default Home;
