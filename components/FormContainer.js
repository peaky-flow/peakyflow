import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PeakFlowFields from './PeakFlowFields';
import Constants from 'expo-constants';

export default class FormContainer extends React.Component {
  render() {
    return (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ marginTop: 10, fontSize: 26}}>Peaky Flow</Text>
        <PeakFlowFields></PeakFlowFields>
      </View>
    );
  }
}