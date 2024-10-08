import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import colors from '../colors';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
const AddActivityScreen = () => {
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [activity, setActivity] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState('');

  const [items, setItems] = useState([
    {label: 'Walking', value: 'walking'},
    {label: 'Running', value: 'running'},
    {label: 'Swimming', value: 'swimming'},
    {label: 'Weights', value: 'weights'},
    {label: 'Yoga', value: 'yoga'},
    {label: 'Cycling', value: 'cycling'},
    {label: 'Hiking', value: 'hiking'},
  ]);

  const handleCancelActivity = () => {
    navigation.goBack();
  };

  const handleSaveActivity = () => {
    navigation.goBack();
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
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Duration *</Text>
        <TextInput
          style={styles.input}
          value={duration}
          onChangeText={setDuration}
          placeholder="Enter duration"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Date *</Text>
        <TextInput
          style={styles.input}
          value={date}
          onChangeText={setDate}
          placeholder="Enter date"
        />
      </View>
      <View style={styles.buttonContainer}> 
        <Button title="Cancel" onPress={handleCancelActivity} />
        <Button title="Save" onPress={handleSaveActivity} />
      </View>

    </SafeAreaView>
  );
};

export default AddActivityScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    padding: 30,
  },
  dropDownContainer: {
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
    fontSize: 18,
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
