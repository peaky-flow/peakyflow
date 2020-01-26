import React, { Component } from 'react';
import { View, TextInput, Text, Alert, Button, FlatList, StyleSheet } from 'react-native';
import ListItem from './ListItem';
import styles from './styles'
import { render } from 'react-dom';
import Constants from 'expo-constants';
import * as FileSystem from 'expo-file-system';


export default class PeakFlowFields extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      listValues: []
    }
    this.path = FileSystem.documentDirectory + "/results.csv"
  }
  setValue(value){
    this.setState({value: value})

  }
  componentDidMount(){
    FileSystem.readAsStringAsync(this.path).then((success) => {
      console.log("saving " + success);
      let saved = null;
      if(!success){
        saved = [];
      }
      else{
        saved = JSON.parse(success)
      }
      if(Array.isArray(saved)){
        this.setState({'listValues': saved})
      }
      else{
        this.setState({'listValues': [saved]})
      }
    }).catch((err) => {
      Alert.alert(err.message);
    })
  }
  storeValue(){
    var listValues = this.state.listValues;
    listValues.push(this.state.value)
    this.setState({listValues: listValues, value: null});
    console.log("setting " + this.state.listValues);
    var listValues = JSON.stringify(this.state.listValues);
      FileSystem.writeAsStringAsync(this.path, listValues).then((success) => {
    })
    .catch((err) => {
      Alert.alert(err.message);
    })
  }
  render() {
    return (
      <View>
        <View style={{ height: 400 }}>
          <FlatList
            style={styles.container}
            data={this.state.listValues}
            renderItem={({ item }) => (
              <ListItem
                title={item}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          /></View>
      <TextInput
        style={{ height: 60, marginBottom: 20, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => this.setValue(text)}
        value={this.state.value}
      />
        <Button
          title="Press me"
          style={{ height: 60, marginBottom: 120 }}
          onPress={this.storeValue.bind(this)}
        />
      </View>
    );
  }
}

