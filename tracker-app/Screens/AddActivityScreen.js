import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';
import colors from '../colors';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppContext } from '../Context/AppContext';

const AddActivityScreen = () => {
  const { activities, setActivities } = useContext(AppContext);
  const navigation = useNavigation();
  const [activity, setActivity] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  const [items, setItems] = useState([
    {label: 'Walking', value: 'Walking'},
    {label: 'Running', value: 'Running'},
    {label: 'Swimming', value: 'Swimming'},
    {label: 'Weights', value: 'Weights'},
    {label: 'Yoga', value: 'Yoga'},
    {label: 'Cycling', value: 'Cycling'},
    {label: 'Hiking', value: 'Hiking'},
  ]);

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
      const isSpecial = ((activity === 'running' || activity === 'weights') && duration > 60) ? true : false;
      const newActivity = {
        id: Date.now().toString(),
        name: activity,
        date: date.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }).split(',').map(word => word.trim()).join(' '),
        duration: `${duration} min`,
        isSpecial: isSpecial,
      };
      console.log(newActivity);
      setActivities([...activities, newActivity]);
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.dropDownContainer}>
        <Text style={styles.label}>Activity *</Text>
        <DropDownPicker
          open={open}
          setOpen={setOpen}
          value={activity}
          items={items}
          setValue={setActivity}
          setItems={setItems}
          style={styles.dropdown}
          zIndex={3000}
          zIndexInverse={1000}
        />
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Duration (min) *</Text>
        <TextInput
          style={styles.input}
          value={duration}
          onChangeText={setDuration}
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

export default AddActivityScreen

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
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 5,
    backgroundColor: colors.inputBackground,
    padding: 10,
    color: colors.primary,
  },
});
