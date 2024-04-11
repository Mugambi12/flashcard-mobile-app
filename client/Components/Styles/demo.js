import React from "react";
import {
  FlatList,
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { LineChart } from "react-native-chart-kit";

import {
  colors,
  padding,
  margin,
  borderRadius,
  boxShadow,
} from "../../Styles/Colors";

const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.title}>Dashboard</Text>

        {renderCardSection()}
        {renderBalanceTrendSection()}

        {renderRecentTransactionSection()}

        {renderReportSection()}
        {renderTransactionSection()}
      </ScrollView>
    </View>
  );
};

const renderCardSection = () => (
  <View style={styles.cardContainer}>
    <View style={styles.card}>
      <View style={styles.cardSection}>
        <Icon
          name="attach-money"
          color={colors.primary}
          style={styles.cardIcons}
        ></Icon>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Budget</Text>
          <Text style={styles.cardValue}>KES 2,000</Text>
        </View>
      </View>
    </View>

    <View style={styles.card}>
      <View style={styles.cardSection}>
        <Icon
          name="money-off"
          color={colors.danger}
          style={styles.cardIcons}
        ></Icon>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Expenses</Text>
          <Text style={styles.cardValue}>KES 1,500</Text>
        </View>
      </View>
    </View>

    <View style={styles.card}>
      <View style={styles.cardSection}>
        <Icon
          name="account-balance"
          color={colors.success}
          style={styles.cardIcons}
        ></Icon>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Savings</Text>
          <Text style={styles.cardValue}>KES 500</Text>
        </View>
      </View>
    </View>

    <View style={styles.card}>
      <View style={styles.cardSection}>
        <Icon
          name="add-circle-outline"
          color={colors.secondary}
          style={styles.cardIcons}
        ></Icon>
        <View style={styles.cardContent}>
          <Text style={styles.cardValue}>Add</Text>
          <Text style={styles.cardTitle}>New Card</Text>
        </View>
      </View>
    </View>
  </View>
);

const getData = () => {
  return {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        data: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
        ],
      },
    ],
  };
};

const getChartConfig = (colors) => {
  return {
    backgroundColor: colors.white,
    backgroundGradientFrom: colors.white,
    backgroundGradientTo: colors.light,
    decimalPlaces: 1,
    color: (opacity = 1) => `rgba(0, 251, 209, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: "1",
      strokeWidth: "2",
      stroke: colors.success,
    },
    withVerticalLines: false,
    withHorizontalLines: false,
  };
};

const renderBalanceTrendSection = () => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Balance Trend Overview</Text>

    <View style={styles.chartContainer}>
      <View style={styles.chartSection}>
        <View style={styles.chartSectionLeft}>
          <Text style={styles.chartSubTitle}>Last 30 Days</Text>
          <Text style={styles.chartTitle}>KES 100,000</Text>
        </View>
        <View style={styles.chartSectionRight}>
          <Text style={styles.chartSubTitle}>vd past period</Text>
          <Text style={styles.chartTitle}>0%</Text>
        </View>
      </View>

      {/* Sample Line Chart */}
      <LineChart
        data={getData()}
        width={styles.chartWidth.width}
        height={220}
        yAxisLabel=""
        yAxisSuffix="k"
        yAxisInterval={1}
        chartConfig={getChartConfig(colors)}
        withVerticalLines={false}
        withHorizontalLines={false}
        bezier
        style={styles.chartStyle}
      />
    </View>

    {/* Rendering second chart */}

    <View style={styles.chartContainer}>
      <Text style={styles.chartTitle}>Chart 2 Title</Text>
      <Text style={styles.chartSubTitle}>Chart 2 Subtitle</Text>

      {/* Sample Line Chart */}
      <LineChart
        data={getData()}
        width={styles.chartWidth.width}
        height={220}
        yAxisLabel=""
        yAxisSuffix="k"
        yAxisInterval={1}
        chartConfig={getChartConfig(colors)}
        withVerticalLines={false}
        withHorizontalLines={false}
        bezier
        style={styles.chartStyle}
      />
    </View>
  </View>
);

const renderRecentTransactionSection = () => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Recent Transactions</Text>

    <View style={styles.sectionRow}>
      <Text style={styles.chartSubTitle}>Last 30 Days</Text>
      <Text style={styles.chartSubTitle}>Last 30 Days</Text>
    </View>

    <ScrollView style={{ maxHeight: 200 }}>
      <View style={styles.sectionRow} backgroundColor={colors.danger}>
        <Text style={styles.chartTitle}>Last 30 Days</Text>
        <View style={styles.sectionColumn}>
          <Text style={styles.chartSubTitle}>Last 30 Days</Text>
          <Text style={styles.chartTitle}>Last 30 Days</Text>
        </View>
        <View style={styles.sectionColumn}>
          <Text style={styles.chartSubTitle}>Last 30 Days</Text>
          <Text style={styles.chartTitle}>Last 30 Days</Text>
        </View>
      </View>
    </ScrollView>

    <Text>No recent transactions</Text>
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
    width: Dimensions.get("window").width,
  },
  scrollViewContent: {
    paddingTop: 170,
    paddingBottom: 70,
    paddingHorizontal: 5,
    width: Dimensions.get("window").width,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },

  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    marginBottom: 20,
  },
  cardSection: {
    flexDirection: "row",
    backgroundColor: colors.white,
    padding: 10,
    paddingVertical: 15,
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
    padding: 16,
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
  sectionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  sectionColumn: {
    flexDirection: "column",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  chartContainer: {
    alignItems: "left",
    marginBottom: 20,
  },
  chartSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  chartSectionLeft: {
    flex: 1,
  },
  chartSectionRight: {
    flex: 1,
    alignItems: "flex-end",
  },
  chartTitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  chartSubTitle: {
    fontSize: 14,
    marginBottom: 10,
  },
  chart: {
    width: Dimensions.get("window").width,
    height: 200,
    backgroundColor: colors.white,
  },
  chartWidth: {
    width: Dimensions.get("window").width - 35,
  },
  chartStyle: {
    marginVertical: 8,
    borderRadius: 8,
  },
});

export default Home;
