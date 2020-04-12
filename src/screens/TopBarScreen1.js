import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const TopBarScreen1 = () => {
  return (
    <View>
      <Text style={styles.text}></Text>
      <Text style={styles.text}>This is TopBarScreen 1</Text>
      <Text style={styles.text}></Text>
      <Text style={styles.text2}>
        You can put the Top Bar even into a screen
      </Text>
      <Text style={styles.text2}>check Navigation.js to see how</Text>
    </View>
  );
};

TopBarScreen1.navigationOptions = (navData) => {
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
  text2: {
    textAlign: "center",
    fontSize: 20,
  },
});

export default TopBarScreen1;
