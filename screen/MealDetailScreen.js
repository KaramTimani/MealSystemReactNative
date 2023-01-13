import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView ,Button} from "react-native";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
function MealDetailScreen({ route ,navigation}) {
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
function headerButtonPressHandler(){
console.log("hello");
}
        useLayoutEffect(()=>navigation.setOptions({
                headerRight:()=>{
                    return <Button title="Tap My" onPress={headerButtonPressHandler}/>
                }

        },[navigation,headerButtonPressHandler]));
    return (
        <ScrollView style={styles.rootContainer}>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                affordability={selectedMeal.affordability}
                complexity={selectedMeal.complexity}
                textStyle={{ color: "white" }}
            />
            <View style={styles.outerContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>

        </ScrollView>
    );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 10
    },
    image: {
        width: "100%",
        height: 350,
    },
    title: {
        fontWeight: "bold",
        fontSize: 24,
        color: "white",
        margin: 8,
        textAlign: "center",
    },
    listContainer: {
        width: "80%"
    },
    outerContainer: {
        alignItems: "center"
    }
})