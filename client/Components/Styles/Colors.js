// Defaults for screenwidth, colors, padding, margin, border radius, and box shadow
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const colors = {
  transparent: "transparent",
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

const padding = {
  sm: 5,
  md: 10,
  lg: 15,
  xl: 20,
};

const margin = {
  sm: 5,
  md: 10,
  lg: 15,
  xl: 20,
  xxl: 50,
  xxxl: 70,
};

const borderRadius = {
  sm: 5,
  md: 10,
  lg: 15,
  xl: 20,
};

const boxShadow = {
  shadowColor: colors.black,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
};

const opacity = {
  xs: 0.3,
  sm: 0.5,
  md: 0.7,
  lg: 0.9,
};

export {
  screenWidth,
  colors,
  padding,
  margin,
  borderRadius,
  boxShadow,
  opacity,
};
