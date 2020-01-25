import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PeakFlowFields from './PeakFlowFields';

export default class FormContainer extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello, silly!</Text>
        <PeakFlowFields></PeakFlowFields>
      </View>
    );
  }
}