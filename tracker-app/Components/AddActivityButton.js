import React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const AddActivityButton = () => {
  const navigation = useNavigation();

  const handleAddActivity = () => {
    navigation.navigate('AddActivityScreen');
  };

  return <Button title="Add Activity" onPress={handleAddActivity} />;
};

export default AddActivityButton;
