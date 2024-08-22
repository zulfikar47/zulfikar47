import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profil from "./pages/Profil";
import History from "./pages/History";
import ForgotPassword from "./pages/ForgotPassword";
import GoMart from "./pages/GoMart";
import FontAwesome from '@expo/vector-icons/FontAwesome';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
 return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "black" }, 
      }}
    >
   <Tab.Screen
    name="Home"
    component={Home}
    options={{
     headerShown: false,
     tabBarLabel: ({ focused }) => <Text style={{ color: focused ? "#00AA13" : "gray" }}>Home</Text>,
     tabBarIcon: ({ size, focused }) => (
      <FontAwesome name="home" color={focused ? "#00AA13" : "gray"} size={size} />
     ),
    }}
   />

   <Tab.Screen
    name="GoMart"
    component={GoMart}
    options={{
     headerShown: false,
     tabBarLabel: ({ focused }) => <Text style={{ color: focused ? "#00AA13" : "gray" }}>GoMart</Text>,
     tabBarIcon: ({ size, focused }) => (
      <FontAwesome name="shopping-basket" color={focused ? "#00AA13" : "gray"} size={size} />
     ),
    }}
   />

   <Tab.Screen
    name="History"
    component={History}
    options={{
     headerShown: false,
     tabBarLabel: ({ focused }) => (
      <Text style={{ color: focused ? "#00AA13" : "gray" }}>History</Text>
     ),
     tabBarIcon: ({ size, focused }) => (
      <FontAwesome name="history" color={focused ? "#00AA13" : "gray"} size={size} />
     ),
    }}
   />
   
   <Tab.Screen
    name="Profil"
    component={Profil}
    options={{
     headerShown: false,
     tabBarLabel: ({ focused }) => (
      <Text style={{ color: focused ? "#00AA13" : "gray" }}>Profile</Text>
     ),
     tabBarIcon: ({ size, focused }) => (
      <FontAwesome name="user" color={focused ? "#00AA13" : "gray"} size={size} />
     ),
    }}
   />
  </Tab.Navigator>
 );
}

function App() {
 return (
  <NavigationContainer>
   <Stack.Navigator>
    <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
    <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
   </Stack.Navigator>
  </NavigationContainer>
 );
}

export default App;
