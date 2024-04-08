import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Login = ({ onLogin, onRegister }) => {
  return (
    <View style={styles.container}>
      <Icon name="person" style={styles.icon} />
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={onLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onRegister}>
        <Text style={styles.link}>Don't have an account? Register here</Text>
      </TouchableOpacity>
    </View>
  );
};

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
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.light,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  icon: {
    fontSize: 100,
    color: colors.secondary,
  },
  inputContainer: {
    width: "80%",
    marginBottom: 20,
  },
  input: {
    backgroundColor: colors.white,
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.borderColor,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
  },
  link: {
    marginTop: 20,
    color: colors.primary,
    textDecorationLine: "underline",
  },
});

export default Login;
