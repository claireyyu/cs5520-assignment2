import React, { useContext } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { AppContext } from '../Context/AppProvider'; // You'll need to create this context
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../colors';
import Entypo from '@expo/vector-icons/Entypo';

const ItemsList = ({ type }) => {
  const { activities, diet } = useContext(AppContext);

  const data = type === 'activities' ? activities : diet;

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.nameContainer}>
        <Text style={styles.title}>{item.name}</Text>
      </View>
      <View style={styles.dataContainer}>
        {item.isSpecial && <Entypo name="warning" size={16} color="yellow" style={styles.icon} />}
        <Text style={styles.data}>{item.date.split(',').map(word => word.trim()).join(' ')}</Text>
        <Text style={styles.data}>{type === 'activities' ? `${item.duration}` : `${item.calories}`}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.primary,
    padding: 12,
    margin: 8,
    borderRadius: 5,
  },
  nameContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    marginRight: 5,
  },
  icon: {
    marginLeft: 5,
  },
  dataContainer: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  data: {
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: colors.background,
    color: colors.primary,
    padding: 5,
    marginLeft: 4,
    minWidth: 60,
  },
});

export default ItemsList;
