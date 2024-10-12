import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';
import colors from '../colors';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { AppContext } from '../Context/AppProvider';
import ThemedSafeAreaView from '../Components/ThemedSafeAreaView';
import { useTheme } from '../Context/ThemeProvider';
import DatePicker from '../Components/DatePicker';


export default function AddDietScreen() {
  const { backgroundColor, textColor } = useTheme();
  const { diet, setDiet } = useContext(AppContext);
  const navigation = useNavigation();
  const [dietDescription, setDietDescription] = useState('');
  const [calories, setCalories] = useState('');
  const [date, setDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleCancelDiet = () => {
    navigation.goBack();
  };

  const handleSaveDiet = () => {
    let isInputValid = true;

    if (!dietDescription || !calories || !date || isNaN(calories) || parseFloat(calories) <= 0) {
      isInputValid = false;
    }

    if (!isInputValid) {
      Alert.alert('Invalid Input', 'Please check your input values');
    } else {
      const isSpecial = (calories > 60) ? true : false;
      const newDiet = {
        id: Date.now().toString(),
        name: dietDescription,
        date: date.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }).split(',').map(word => word.trim()).join(' '),
        calories: calories,
        isSpecial: isSpecial,
      };
      console.log(newDiet);
      setDiet([...diet, newDiet]);
      navigation.goBack();
    }
  };

  return (
    <ThemedSafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.inputContainer}>
          <Text style={[styles.label, { color: textColor }]}>Description *</Text>
          <TextInput
            style={styles.longInput}
            value={dietDescription}
            onChangeText={setDietDescription}
            multiline={true}
            numberOfLines={4}
            textAlignVertical="top"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={[styles.label, { color: textColor }]}>Calories *</Text>
          <TextInput
              style={styles.input}
              value={calories}
              onChangeText={setCalories}
          />
        </View>
        <DatePicker date={date} setDate={setDate} showDatePicker={showDatePicker} setShowDatePicker={setShowDatePicker} />
        <View style={styles.buttonContainer}> 
          <Button title="Cancel" onPress={handleCancelDiet} />
          <Button title="Save" onPress={handleSaveDiet} />
        </View>
      </ScrollView>
    </ThemedSafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    paddingHorizontal: 30,
    flexGrow: 1,
  },
  inputContainer: {
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary,
    marginTop: 10,
  },
  dropdown: {
    borderColor: colors.border,
    backgroundColor: colors.inputBackground,
  },
  longInput: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 5,
    backgroundColor: colors.inputBackground,
    padding: 10,
    color: colors.primary,
    height: 100,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 5,
    backgroundColor: colors.inputBackground,
    padding: 10,
    color: colors.primary,
  },
});
