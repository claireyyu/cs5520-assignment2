import { StyleSheet, View, Text, TextInput } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import colors from '../colors';
import { useTheme } from '../Context/ThemeProvider';
import { Platform } from 'react-native';

export default function DatePicker({ date, setDate, showDatePicker, setShowDatePicker }) {

  const { backgroundColor, textColor } = useTheme();

  const handlePressDatePicker = () => {
    if (!date) {
      setDate(new Date()); // Set current date when opening picker for the first time
      setShowDatePicker(true);
    } else {
      setShowDatePicker(!showDatePicker);
    }
  };

  const handleDateChange = (event, selectedDate) => {
    setDate(selectedDate);
    setShowDatePicker(false);
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label, { color: textColor }]}>Date *</Text>
      <TextInput
        style={styles.input}
        value={date ? date.toDateString() : ''}
        editable={true}
        onPressIn={handlePressDatePicker}
      />
      {showDatePicker && (
        <DateTimePicker
          value={date || new Date()}
          mode="date"
          display={Platform.OS === 'ios' && 'inline'}
          onChange={handleDateChange}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
    zIndex: 1000,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
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