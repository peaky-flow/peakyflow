import React, { Component } from 'react';
import { View, TextInput, Text, Alert, Button } from 'react-native';
import { render } from 'react-dom';
import * as FileSystem from 'expo-file-system';
import * as MailComposer from 'expo-mail-composer';


export default class SendData extends Component {
  constructor(props) {
    super(props);
    this.value;
  }

  doSendMail(pwd){
    MailComposer.composeAsync({
      recipients: ["peakyflow1@gmail.com, irc91914@gmail.com",],
      subject: "Peak flow data",
      body: "<h1>Peak flow data</h1><p>Hello</p>",
      isHtml: true,
      attachments: [
        FileSystem.documentDirectory + "/results.csv"
      ],
    })
      .then(success => console.log(success))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <View style={{ marginTop: 20 }}>
        <Button
          title="Send data"
          onPress={() => this.doSendMail(this.value)}
        />
      </View>
    );
  }
}
