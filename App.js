import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View} from 'react-native';
import CategoriesScreen from './screen/CategoriesScreen';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import MealsOverviewScreen from './screen/MealsOverviewScreen';
import MealDetailScreen from "./screen/MealDetailScreen";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: "#351401" },
          headerTintColor: "white",
          contentStyle: { backgroundColor: "#3f2f25" }
        }}>
          <Stack.Screen name="MealsCategories" component={CategoriesScreen}

          />
          <Stack.Screen name="MealsOverView" component={MealsOverviewScreen}
          // options={({route,navigation})=>{
          //   const catId=route.params.categoryId;
          //   return{
          //     title:catId,
          //   };
          // }}

          />
          <Stack.Screen name="MealDetailScreen"
            component={MealDetailScreen}
            

          />

        </Stack.Navigator>

      </NavigationContainer>

    </>
  );
}

const styles = StyleSheet.create({

});
