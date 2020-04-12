import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import {
  createMaterialTopTabNavigator,
  createBottomTabNavigator,
} from "react-navigation-tabs";

import { createDrawerNavigator } from "react-navigation-drawer";

import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import Colors from "../constants/Colors";

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import Screen1 from "../screens/Screen1";
import Screen2 from "../screens/Screen2";
import TopBarScreen1 from "../screens/TopBarScreen1";
import TopBarScreen2 from "../screens/TopBarScreen2";

// default styling with some examples if you want to use it

const defaultStackNavOptions = {
  headerStyle: {
    // backgroundColor: "red",
  },
  headerTitleStyle: {
    // fontFamily: "open-sans-bold", // fonts not installed
  },
  headerBackTitleStyle: {
    // fontFamily: "open-sans", // fonts not installed
  },
  headerTintColor: "white",
};

const TopBarNavigator = createMaterialTopTabNavigator(
  {
    TopBarScreen1: {
      screen: TopBarScreen1,
      navigationOptions: {
        tabBarIcon: ({}) => (
          //Your icon component for example =>
          <MaterialCommunityIcons name="access-point" size={25} color="white" />
        ),
      },
    },

    TopBarScreen2: {
      screen: TopBarScreen2,
      navigationOptions: {
        tabBarIcon: ({}) => (
          //Your icon component for example =>
          <MaterialCommunityIcons
            name="airplane-takeoff"
            size={25}
            color="white"
          />
        ),
      },
    },
  },

  {
    tabBarOptions: {
      activeTintColor: "#16a085",
      showIcon: true,
      showLabel: false,
      swipeEnabled: true,
      labelStyle: {
        fontSize: 10,
        marginBottom: 20,
      },
      style: {
        backgroundColor: Colors.toScreenGreen,
      },
      tabStyle: {
        height: 50,
      },
    },
  }
);

const ToTopBar = createStackNavigator(
  {
    ToFind: {
      screen: TopBarNavigator,
      navigationOptions: {
        headerTitle: "Top Bar",
        headerStyle: {
          backgroundColor: Colors.toScreenGreen,
        },
      },
    },
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

// IF YOU WANT YOU CAN TRY TO ENABLE IT BELOW

const ToScreen1 = createStackNavigator(
  {
    ToScreen1: {
      screen: ToTopBar, /// it contains the TopBar created above
      navigationOptions: {
        headerTitle: "Header Title Top Bar",
        headerStyle: {
          backgroundColor: Colors.toScreenYellow,
        },
      },
    },
  },
  {
    mode: "modal",
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const ToScreen2 = createStackNavigator(
  {
    Screen2: {
      screen: Screen2,
      navigationOptions: {
        headerTitle: "Screen 2",
        headerStyle: {
          backgroundColor: Colors.toScreenRed,
        },
      },
    },
  },
  {
    mode: "modal",
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

/// INSTEAD OF "ToTopBar" TRY TO PUT "ToScreen1"

const StackNavigator = {
  Screen1: {
    screen: ToScreen1,
    navigationOptions: {
      title: "Screen 1",
      tabBarIcon: () => {
        return <Ionicons name="ios-barcode" size={25} color="white" />;
      },
      tabBarColor: Colors.toScreenGreen,
      activeColor: "white",
    },
  },
  Screen2: {
    screen: ToScreen2,
    navigationOptions: {
      title: "Screen 2",
      tabBarIcon: () => {
        return <Ionicons name="ios-bulb" size={25} color="white" />;
      },
      tabBarColor: Colors.toScreenYellow,
      activeColor: "white",
    },
  },
};

const TabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(StackNavigator, {
        activeColor: "white",
        shifting: true,
        barStyle: {
          // backgroundColor: Colors.primaryColor,
        },
      })
    : createBottomTabNavigator(StackNavigator, {
        tabBarOptions: {
          labelStyle: {
            // EXAMPLEPS OF MORE CUSTOMIZATION
            // fontFamily: "open-sans",
          },
          // activeTintColor: Colors.accentColor,
          // inactiveTintColor: "green",
          // activeBackgroundColor: "black",
          // inactiveBackgroundColor: "yellow"
        },
      });

const StackDrawerNavigator = createStackNavigator({
  Screen1: {
    screen: Screen1,
    navigationOptions: {
      title: "Screen 1",
      tabBarIcon: () => {
        return <Ionicons name="md-search" size={25} color="white" />;
      },
      tabBarColor: Colors.toScreenGreen,
      activeColor: "white",
    },
  },
});

const MainNavigation = createDrawerNavigator(
  {
    ToDrawerScreen1: {
      screen: TabNavigator,
      navigationOptions: {
        drawerLabel: "Complex Navigation",
        drawerIcon: () => <Ionicons name="ios-cog" size={25} />,
      },
    },
    ToDrawerScreen2: {
      screen: StackDrawerNavigator,
      navigationOptions: {
        drawerLabel: "Simple Navigation",
        drawerIcon: () => <Ionicons name="ios-cut" size={25} />,
      },
    },
  },

  // values for the whole drawer
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        // fontFamily: "open-sans-bold",
      },
    },
  }
);

export default createAppContainer(MainNavigation);
