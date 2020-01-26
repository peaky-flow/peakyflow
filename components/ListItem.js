import React, { Component } from 'react';
import { View, TextInput, Text, Alert, Button, FlatList } from 'react-native';
import styles from './styles'

export default function ListItem({ title }) {
  return (
    <View style={styles.item}>
      <Text>{title}</Text>
    </View>
  );
}
