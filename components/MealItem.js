import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import {useNavigation} from "@react-navigation/native";
import MealDetails from "./MealDetails";
function MealItem({id, title, imageUrl, duration, affordability, complexity }) {
    const navigation=useNavigation();
    
    function PressEventHandler() {
        navigation.navigate("MealDetailScreen",{
            mealId:id,

        })
    }
    
    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{color:"#ccc"}}
            onPress={PressEventHandler}
            >
                <View>
                    <Image source={{ uri: imageUrl }}
                        style={styles.image}
                    />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <MealDetails 
                    duration={duration}
                    affordability={affordability}
                    complexity={complexity}

                />
            </Pressable>
        </View>
    );
}
export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius:10,
        overflow: 'hidden',
        backgroundColor: "white",
        elevation:4,

    },
    image: {
        width: "100%",
        height: 200,

    }
    ,
    title: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
        margin:8,
    },
   
});