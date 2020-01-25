import React, { Component } from 'react';
import { View, TextInput, Text, Alert, Button } from 'react-native';
import { render } from 'react-dom';
import * as FileSystem from 'expo-file-system';

export default class PeakFlowFields extends Component {
  constructor(props) {
    super(props);
    this.value = null;
  }
  setValue(value){
    this.value = value
  }
  storeValue(){
    let path = FileSystem.documentDirectory + "/results.csv"
    FileSystem.writeAsStringAsync(path, this.value).then((success) => {
      // do nothing
    })
    .catch((err) => {
      Alert.alert(err.message);
    })
  }
  render() {
    return (
      <View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => this.setValue(text)}
        value={this.value}
      />
        <Button
          title="Press me"
          onPress={this.storeValue.bind(this)}
        />
      </View>
    );
  }
}

