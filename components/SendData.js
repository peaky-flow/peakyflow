import React, { Component } from 'react';
import { View, TextInput, Text, Alert, Button } from 'react-native';
import { render } from 'react-dom';
import RNSmtpMailer from "react-native-smtp-mailer";

export default class SendData extends Component {
  constructor(props) {
    super(props);
    this.value;
  }

  doSendMail(pwd){
    RNSmtpMailer.sendMail({
      mailhost: "smtp.gmail.com",
      port: "465",
      ssl: true, 
      username: "peakyflow1@gmail.com",
      password: pwd,
      from: "peakyflow1@gmail.com",
      recipients: "peakyflow1@gmail.com",
      subject: "Peak flow data",
      htmlBody: "<h1>Peak flow data</h1><p>Hello</p>",
      attachmentPaths: [
        RNFS.DocumentDirectoryPath + "/results.csv"
      ],
      attachmentNames: [
        "results.csv"
      ], 
      attachmentTypes: ["csv"] //needed for android, in ios-only application, leave it empty: attachmentTypes:[]. Generally every img(either jpg, png, jpeg or whatever) file should have "img", and every other file should have its corresponding type.
    })
      .then(success => console.log(success))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <View>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          value={this.value}
        />
        <Button
          title="Send data"
          onPress={() => this.doSendMail(this.value)}
        />
      </View>
    );
  }
}
