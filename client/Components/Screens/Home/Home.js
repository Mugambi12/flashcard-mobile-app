import React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { LineChart, BarChart, PieChart } from "react-native-chart-kit";

import {
  screenWidth,
  colors,
  padding,
  margin,
  borderRadius,
  boxShadow,
  opacity,
} from "../../Styles/Colors";

const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.title}>Dashboard</Text>

        {renderCardSection()}
        {renderBalanceTrendSection()}
        {renderRecentTransactionSection()}
        {renderExpensesStructureSection()}
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
        />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Budget</Text>
          <Text style={styles.cardValue}>KES 2,000</Text>
        </View>
      </View>
    </View>

    <View style={styles.card}>
      <View style={styles.cardSection}>
        <Icon name="money-off" color={colors.danger} style={styles.cardIcons} />
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
        />
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
        />
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

const getChartConfig = () => {
  return {
    backgroundColor: colors.white,
    backgroundGradientFrom: colors.white,
    backgroundGradientTo: colors.light,
    decimalPlaces: 1,
    color: (opacity = 1) => `rgba(0, 251, 209, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: borderRadius.md,
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

    <View style={styles.sectionContainer}>
      <View style={styles.sectionRow}>
        <View style={styles.sectionLeft}>
          <Text style={styles.chartSubTitle}>Last 30 Days</Text>
          <Text style={styles.chartTitle}>KES 100,000</Text>
        </View>
        <View style={styles.sectionRight}>
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
        chartConfig={getChartConfig()}
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
    <Text style={styles.sectionTitle}>Latest Transactions</Text>

    <View style={styles.sectionRow}>
      <Text style={styles.chartSubTitle}>Last 30 Days</Text>
      <Text style={(styles.chartSubTitle, styles.sectionRight)}>
        <Text style={[styles.chartSubTitle, styles.sectionRight]}>
          Last 30 Days
        </Text>
        Last 30 Days
      </Text>
    </View>

    <ScrollView style={{ maxHeight: 200 }}>
      <View
        style={styles.sectionRow}
        backgroundColor={colors.danger}
        padding={padding.md}
        borderRadius={borderRadius.md}
        opacity={opacity.md}
      >
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

const renderExpensesStructureSection = () => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Expense Structure</Text>

    <View style={styles.sectionContainer}>
      <Text style={styles.chartSubTitle}>Last 30 Days</Text>
      <Text style={styles.chartTitle}>KES 1,500</Text>

      {/* Sample Line Chart */}
      <BarChart
        data={getData()}
        width={styles.chartWidth.width}
        height={220}
        yAxisLabel=""
        yAxisSuffix="k"
        yAxisInterval={1}
        chartConfig={getChartConfig()}
        withVerticalLines={false}
        withHorizontalLines={false}
        bezier
        style={styles.chartStyle}
      />
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
    width: Dimensions.get("window").width,
  },
  scrollViewContent: {
    paddingTop: 170,
    paddingBottom: 70,
    paddingHorizontal: padding.md,
    width: Dimensions.get("window").width,
  },
  title: {
    fontSize: 24,
    marginBottom: margin.md,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48.5%",
    marginBottom: margin.lg,
  },
  cardSection: {
    flexDirection: "row",
    backgroundColor: colors.white,
    padding: padding.md,
    borderRadius: borderRadius.md,
    ...boxShadow,
  },
  cardIcons: {
    fontSize: 40,
  },
  cardContent: {
    marginLeft: margin.md,
  },
  cardTitle: {
    fontSize: 18,
    marginBottom: margin.sm,
  },
  cardValue: {
    fontSize: 20,
    fontWeight: "bold",
  },
  section: {
    backgroundColor: colors.white,
    padding: padding.md,
    marginBottom: margin.md,
    borderRadius: borderRadius.md,
    ...boxShadow,
  },
  sectionContainer: {
    marginBottom: margin.md,
  },
  sectionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: padding.sm,
  },
  sectionColumn: {
    flexDirection: "column",
  },
  sectionLeft: {
    flex: 1,
  },
  sectionRight: {
    flex: 1,
    alignItems: "flex-end",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: margin.sm,
  },
  chartTitle: {
    fontSize: 18,
    marginBottom: margin.sm,
  },
  chartSubTitle: {
    fontSize: 14,
    marginBottom: margin.md,
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
    marginVertical: padding.sm,
    borderRadius: borderRadius.md,
  },
});

export default Home;
