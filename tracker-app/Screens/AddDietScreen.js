import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';
import colors from '../colors';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppContext } from '../Context/AppContext';

export default function AddDietScreen() {
  const { diet, setDiet } = useContext(AppContext);
  const navigation = useNavigation();
  const [dietDescription, setDietDescription] = useState('');
  const [calories, setCalories] = useState('');
  const [date, setDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleShowDatePicker = () => {
    if (!date) {
      setDate(new Date()); // Set current date when opening picker for the first time
    }
    setShowDatePicker(true);
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const handleCancelActivity = () => {
    navigation.goBack();
  };

  const handleSaveActivity = () => {
    let isInputValid = true;

    if (!activity || !duration || !date || isNaN(duration) || parseFloat(duration) <= 0) {
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
    <SafeAreaView style={styles.container}>
      <View style={styles.dropDownContainer}>
        <Text style={styles.label}>Description *</Text>
        <TextInput
          style={styles.longInput}
          value={dietDescription}
          onChangeText={setDietDescription}
        />
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Calories *</Text>
        <TextInput
            style={styles.input}
            value={calories}
            onChangeText={setCalories}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Date *</Text>
        <TextInput
          style={styles.input}
          value={date ? date.toDateString() : ''}
          editable={false}
          onPress={handleShowDatePicker}
        />
        {showDatePicker && (
          <DateTimePicker
            value={date || new Date()}
            mode="date"
            display="inline"
            onChange={handleDateChange}
          />
        )}
      </View>
      <View style={styles.buttonContainer}> 
        <Button title="Cancel" onPress={handleCancelActivity} />
        <Button title="Save" onPress={handleSaveActivity} />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  scrollViewContent: {
    paddingHorizontal: 30,
    flexGrow: 1,
  },
  dropDownContainer: {
    paddingHorizontal: 30,
    marginBottom: 20,
    zIndex: 3000,
    elevation: 3,
  },
  inputContainer: {
    marginBottom: 20,
    zIndex: 1000,
  },
  buttonContainer: {
    zIndex: 1000,
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
