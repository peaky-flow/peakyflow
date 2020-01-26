import { View, TextInput, Text, Alert, Button, FlatList, StyleSheet } from 'react-native';
import ListItem from './ListItem';
import { render } from 'react-dom';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: 'powderblue',
    width: 300,
    // marginBottom: 150,
    // marginTop: 50
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default styles