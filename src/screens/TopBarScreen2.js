import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const TopBarScreen2 = () => {
  return (
    <View>
      <Text style={styles.text}></Text>
      <Text style={styles.text}>This is TopBarScreen 2</Text>
    </View>
  );
};

TopBarScreen2.navigationOptions = (navData) => {
  return {
    headerLeft: () => (
      <TouchableOpacity
        onPress={() => {
          navData.navigation.toggleDrawer();
        }}
      >
        <Ionicons title="Menu" iconName="ios-menu" />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 30,
  },
});

export default TopBarScreen2;
