import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native';
import { useTheme } from '../Context/ThemeProvider';
import ThemedSafeAreaView from '../Components/ThemedSafeAreaView';

export default function SettingsScreen() {
  const { backgroundColor, textColor, toggleTheme } = useTheme();

  return (
    <ThemedSafeAreaView style={styles.container}>
      <View style={[styles.buttonContainer, ]}>
        <Button
          title="Toggle Theme"
          onPress={toggleTheme}
          color={textColor}
        />
      </View>
    </ThemedSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    padding: 5,
    borderRadius: 5,
  }
});
