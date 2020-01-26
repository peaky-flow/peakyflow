import React, { Component } from 'react';
import { View, TextInput, Text, CheckBox, Alert, Button, FlatList, StyleSheet } from 'react-native';
import ListItem from './ListItem';
import SendData from './SendData';
import styles from './styles'
import { render } from 'react-dom';
import Constants from 'expo-constants';
import * as FileSystem from 'expo-file-system';


export default class PeakFlowFields extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pefr: null,
      workDay: false,
      listValues: []
    }
    this.path = FileSystem.documentDirectory + "/results.csv"
  }
  setValue(value){
    this.setState({pefr: value})

  }
  componentDidMount(){
    FileSystem.readAsStringAsync(this.path).then((success) => {
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
    var t = new Date();
    var hours = t.getHours();
    var minutes = t.getMinutes();
    listValues.unshift({
      pefr: this.state.pefr, workDay: this.state.workDay, date: "26/01", time: hours + ":" + minutes
    })
    this.setState({listValues: listValues, pefr: null, workDay: false});
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
      <TextInput
        style={{ height: 60, marginBottom: 20, borderColor: 'gray', borderWidth: 1, padding: 20 }}
        onChangeText={text => this.setValue(text)}
        keyboardType='numeric'
        value={this.state.value}
      />
      <View style={{ flexDirection: 'row', justifyContent: "center"}}>
      <CheckBox
      value={this.state.workDay}
      onValueChange={() => this.setState({ workDay: !this.state.workDay })}
      />
      <Text style={{ marginTop: 5}}>Work day</Text>
      </View>
      <Button
          title="Save"
          style={{ height: 60, marginBottom: 120 }}
          onPress={this.storeValue.bind(this)}
        />
        <SendData></SendData>
        <View style={{ height: 400, marginTop: 20 }}>
          <FlatList
            style={styles.container}
            data={this.state.listValues}
            renderItem={({ item }) => (
              <ListItem
                pefr={item.pefr}
                workDay={item.workDay}
                date={item.date}
                time={item.time}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          /></View>
      </View>
    );
  }
}

