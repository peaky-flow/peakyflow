import React, { Component } from 'react';
import { View, TextInput, Text, Alert, Button, FlatList } from 'react-native';
import styles from './styles'

export default function ListItem({ pefr, workDay, date, time }) {
  let wd;
  if (workDay) {
    wd = "Work day"
  } else {
    wd = ""
  }

  return (
    <View style={styles.item}>
      <Text>{date} {time} {pefr} {wd}</Text>

    </View>
  );
}
