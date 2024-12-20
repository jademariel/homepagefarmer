import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProductScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Product Screen!</Text>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
