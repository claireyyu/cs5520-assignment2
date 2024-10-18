import React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AddActivityButton = () => {
  const navigation = useNavigation();

  const handleAddActivity = () => {
    navigation.navigate('AddActivityScreen');
  };

  return <Button title="Add" onPress={handleAddActivity} />;
};

const AddDietButton = () => {
  const navigation = useNavigation();

  const handleAddDiet = () => {
    navigation.navigate('AddDietScreen');
  };

  return <Button title="Add" onPress={handleAddDiet} />;
};

export { AddActivityButton, AddDietButton };

