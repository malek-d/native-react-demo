import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Button, Alert } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage} from 'react-native-elements';
import { material } from 'react-native-typography'


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {text: ''} 
  }

  showAlert() {
    Alert.alert(
      'Confirm Signup',
      'Placeholder',
      [
        {text: 'Confirm', onPress: () => console.log(`${this.state} Confirmed`)},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'}
      ],
      { cancelable: false }
    )
  }

  render() {
    return (
        <View style={styles.container}>
          <KeyboardAvoidingView style={styles.container} behavior="padding" enabled> 
            <Text style={material.display3}>Demo Form</Text>
            <Text style={material.display1}>Hello {this.state.text}!</Text>
                <FormLabel>Name</FormLabel> 
                <FormInput placeholder="Please insert your name" onChangeText={(text) => this.setState({text})}></FormInput>

                <FormLabel>Email Address</FormLabel>
                <FormInput placeholder="Please insert your email address here"></FormInput>

                <FormLabel>Password</FormLabel>
                <FormInput secureTextEntry={true} placeholder="Insert password"></FormInput>
                <Button
                onPress={this.showAlert}
                title="Submit"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
              />
              </KeyboardAvoidingView>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF3010',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {

  }
});
