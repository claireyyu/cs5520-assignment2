import { View, Text, StyleSheet } from 'react-native';
import colors from '../colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import ItemsList from '../Components/ItemsList';

export default function DietScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ItemsList type="diet" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
});