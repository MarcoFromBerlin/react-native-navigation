import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Screen2 = () => {
  return (
    <View>
      <Text style={styles.text}></Text>
      <Text style={styles.text}>This is screen 2</Text>
      <Text style={styles.text}></Text>
      <Text style={styles.text2}>Here you can find a Drawer up left</Text>
    </View>
  );
};

Screen2.navigationOptions = (navData) => {
  return {
    headerLeft: () => (
      <TouchableOpacity
        onPress={() => {
          navData.navigation.toggleDrawer();
        }}
      >
        <Icon name="ios-menu" size={30} color="white" />
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

export default Screen2;
