import React, { Component } from 'react';
import { View, TextInput, Text, Alert, Button } from 'react-native';
import { render } from 'react-dom';

export default class PeakFlowFields extends Component {
  constructor(props) {
    super(props);
    this.value;
  }
  storeValue(value){
    this.value = value;
  }
  render() {
    return (
      <View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => this.storeValue(text)}
        value={this.value}
      />
        <Button
          title="Press me"
          onPress={() => Alert.alert(this.value)}
        />
      </View>
    );
  }
}

