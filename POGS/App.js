import React, { useState } from "react";
import {
  Image,
  Text,
  View,
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import pic from "./delivery_box.png";

export default function App() {
  const [veggieSelected, setVeggieSelected] = useState("");
  const [veggieQuantity, setVeggieQuantity] = useState("1");
  const [fruitSelected, setFruitSelected] = useState("");
  const [fruitQuantity, setFruitQuantity] = useState("1");
  const [totalPrice, setTotalPrice] = useState("Total cost of the order:");

  const calculateTotal = () => {
    const vegCost = parseInt(veggieSelected) || 0; //assigns 0 if veggieSelected's value cannot be converted to an int ex: NaN (Not a Number)
    const vegQuant = parseInt(veggieQuantity);
    const fruitCost = parseInt(fruitSelected) || 0; //assigns 0 if fruitSelected's value cannot be converted to an int ex: NaN (Not a Number)
    const fruitQuant = parseInt(fruitQuantity);
    setTotalPrice(
      "Total cost of the order: $" +
        String(vegCost * vegQuant + fruitCost * fruitQuant)
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.heading}>
          <Text style={styles.title}>POGS Online Shop</Text>
          <Image source={pic} style={styles.logo} />
        </View>
        <View style={styles.dropdownContainer}>
          <Text style={styles.sectionTitle}>Vegetable Choice</Text>
          <View style={styles.pickerRow}>
            <Picker
              style={styles.picker1}
              selectedValue={veggieSelected}
              onValueChange={(itemValue) => setVeggieSelected(itemValue)}
            >
              <Picker.Item label="Select Vegetable" value="" />
              <Picker.Item label="Tomato - $6" value="6" />
              <Picker.Item label="Broccoli - $5" value="5" />
              <Picker.Item label="Carrot - $5" value="5" />
              <Picker.Item label="Spinach - $4" value="4" />
              <Picker.Item label="Squash - $4" value="4" />
            </Picker>
            <Picker
              style={styles.picker2}
              selectedValue={veggieQuantity}
              onValueChange={(itemValue) => setVeggieQuantity(itemValue)}
            >
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
            </Picker>
          </View>
          <Text style={styles.sectionTitle}>Fruit Choice</Text>
          <View style={styles.pickerRow}>
            <Picker
              style={styles.picker1}
              selectedValue={fruitSelected}
              onValueChange={(itemValue) => setFruitSelected(itemValue)}
            >
              <Picker.Item label="Select Fruit" value="" />
              <Picker.Item label="Apple - $11" value="11" />
              <Picker.Item label="Orange - $15" value="15" />
              <Picker.Item label="Kiwi - $14" value="14" />
              <Picker.Item label="Mango - $12" value="12" />
              <Picker.Item label="Grapes - $12" value="12" />
            </Picker>
            <Picker
              style={styles.picker2}
              selectedValue={fruitQuantity}
              onValueChange={(itemValue) => setFruitQuantity(itemValue)}
            >
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
            </Picker>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Calculate" onPress={calculateTotal} color="#008037" />
        </View>
        <Text style={styles.totalPrice}>{totalPrice}</Text>
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.footer}>
          App developed by Mai Vy Nguyen, Melissa Yerlikaya, Michelle David, Thi
          Lan Anh Nguyen
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7ffec",
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "space-between",
    padding: 20,
  },
  heading: {
    fontSize: 23,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#008037",
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 200,
  },
  dropdownContainer: {
    marginBottom: 30,
  },
  sectionTitle: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "#008037",
    marginBottom: 10,
  },
  pickerRow: {
    flexDirection: "row",
    marginBottom: 2,
  },
  picker1: {
    flex: 2,
    color: "#008037",
    backgroundColor: "#e0f7da",
    borderRadius: 5,
    marginHorizontal: 1,
    justifyContent: "center",
    textAlign: "center",
  },
  picker2: {
    flex: 1,
    color: "#008037",
    backgroundColor: "#e0f7da",
    borderRadius: 5,
    marginHorizontal: 1,
    justifyContent: "center",
    textAlign: "center",
  },
  buttonContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#008037",
    textAlign: "center",
  },
  footer: {
    padding: 10,
    backgroundColor: "#FDDDC7",
    alignItems: "center",
    color: "#008037",
    fontSize: 13,
    textAlign: "center",
    fontWeight: "bold",
  },
});
