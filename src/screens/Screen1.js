import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Screen1 = () => {
  return (
    <View>
      <Text style={styles.text}>This is screen 1</Text>
    </View>
  );
};

Screen1.navigationOptions = (navData) => {
  return {
    headerLeft: () => (
      <TouchableOpacity
        onPress={() => {
          navData.navigation.toggleDrawer();
        }}
      >
        <Icon name="ios-menu" size={30} color="black" />
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

export default Screen1;
