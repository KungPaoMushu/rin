import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet, TextInput,AlertIOS, Alert } from 'react-native';
import { db } from '../db';
import { ImagePicker, Permissions} from 'expo';
import * as firebase from 'firebase'; 

export const addItem =  (item) => {
    db.ref('/items').push({
        name: item
    });
}

export const addURL =  (name, url) => {
    db.ref('/url').push({
        filename: name,
        downloadURL: url 
        
    });
}

export default class AddItem extends Component {
  state = {
    name: '',
    url: 'fakeURLSet '
  }

  handleChange = (e) => {
    this.setState({
      name: e.nativeEvent.text
    });
  }
  handleSubmit = () => {
      addItem(this.state.name);
      AlertIOS.alert(
        'Item saved successfully'
       );
    }


  askPermissionsAsync = async () => {
    await Permissions.askAsync(Permissions.CAMERA);
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
  }
  onChooseImagePress = async() => {
    //let result = await ImagePicker.launchCameraAsync(); 
    await this.askPermissionsAsync(); 
    let result = await ImagePicker.launchImageLibraryAsync(); 
    var imageName = Math.round(+new Date()/1000);
    if (!result.cancelled) {
     
      var uploadUrl = await this.uploadImage(result.uri, imageName)

      .then(() => {
        Alert.alert("Succesfully Uploaded Image"); 
        url = uploadUrl; 
        this.setState({url});
        addURL(imageName, this.state.url); 
        
        // db.ref('/url').push({
        //       //adds '[object Object]' to database instead of url
        //       name: firebase.storage().ref().child("images/" + imageName).getDownloadURL().toString()
        //       // name: taskSnapshot.getDownloadUrl().toString()

        //   });
        
      })
      .catch((error) => {
        Alert.alert(error); 
      });
    }
  }

  uploadImage = async (uri, imageName) => {
    const response = await fetch(uri); 
    const blob = await response.blob(); 

    var ref = firebase.storage().ref().child("images/" + imageName); 
    
    const snapshot = await ref.put(blob); 
    url = snapshot.ref.getDownloadURL();
    return snapshot.ref.getDownloadURL(); 
  }

  setDownloadURL(imageName)
  {

    var ref = firebase.storage().child("images/" + imageName + ".jpg");
  
    url = ref.getDownloadURL();
    this.setState({url});
    // console.log("url " + url);
    // console.log("this.state.url " + this.state.url);

  }

  render() {

    return (
       <View style={styles.main}>
        <Text style={styles.title}>Add Item</Text>
        <TextInput
              style={styles.itemInput}
              onChange={this.handleChange}
            />
        <TouchableHighlight
                style = {styles.button}
                underlayColor= "white"
                onPress = {this.handleSubmit}
              >
              <Text
                  style={styles.buttonText}>
                  Add
              </Text>
            </TouchableHighlight>


             <Text style={styles.title}>Add Image</Text>
        <TextInput
              style={styles.itemInput}
              onChange={this.handleChange}
            />
        <TouchableHighlight
                style = {styles.button}
                underlayColor= "white"
                onPress = {this.onChooseImagePress}
              >
              <Text
                  style={styles.buttonText}>
                  Choose Image
              </Text>
            </TouchableHighlight>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'lightgrey'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center'
  },
  itemInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor:'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});