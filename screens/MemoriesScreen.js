import React from 'react';
import { ScrollView, StyleSheet, Button, Text, Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

const counter = 0; 
const cam = require('../assets/images/cam.png'); 
const other = require('../assets/images/icon.png')


const text1 = 'text1'; 
const text2 = 'text2'
var pictureDisplay = false; 
export default class MemoriesScreen extends React.Component {
  static navigationOptions = {
    title: 'Memories',
  };

  

onPressButton() {
	var first = pictureDisplay; 
	var second = !first; 
	pictureDisplay: second; 
}

  render() {
  	
  	let imageSource = pictureDisplay ? cam : other; 
  	let displayedText = pictureDisplay ? text1 : text2; 
    return (
      <ScrollView style={styles.container}>
       
        <Button
            onPress={this.onPressButton}
            title="Button"
            color="#841584"
          />
         

         
         <Image source= {imageSource} />
         <Text> {displayedText} </Text>
          
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
