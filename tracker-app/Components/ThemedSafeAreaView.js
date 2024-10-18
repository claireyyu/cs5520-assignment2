import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../Context/ThemeProvider';

export default function ThemedSafeAreaView({ children, style }) {
  const { backgroundColor, textColor } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: backgroundColor, color: textColor }, style]}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});