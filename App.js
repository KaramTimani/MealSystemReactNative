import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screen/CategoriesScreen';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import MealsOverviewScreen from './screen/MealsOverviewScreen';
import MealDetailScreen from "./screen/MealDetailScreen";
import { ScreenStackHeaderRightView } from 'react-native-screens';
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screen/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import FavoritesContextProvider from './store/context/favorites-context';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
        drawerContentStyle: { backgroundColor: "#351401" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1"

      }}
    >
      <Drawer.Screen name="Categories" component={CategoriesScreen}
        options={{
          title: "All Categories", headerTitleAlign: "center"
          , drawerIcon: ({ color, size }) => <Ionicons
            name="list"
            color={color}
            size={size} />


        }}


      />
      <Drawer.Screen name="Favorites" component={FavoritesScreen}
        options={{
          headerTitleAlign: "center"
          , drawerIcon: ({ focused, size }) => <Ionicons
            name="star"
            color={focused ? '#351401' : 'white'}
            size={size} />

        }}

      />

    </Drawer.Navigator>
  );

}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" }
          }}>

            <Stack.Screen name="Drawer" component={DrawerNavigator}
              options={{ headerShown: false, headerTitleAlign: "center" }}
            />
            <Stack.Screen name="MealsOverView" component={MealsOverviewScreen}

            />
            <Stack.Screen name="MealDetailScreen"
              component={MealDetailScreen}
              options={{ title: "About the Meal", headerTitleAlign: "center" }}



            />

          </Stack.Navigator>

        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({

});
