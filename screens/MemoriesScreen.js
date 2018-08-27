import React from 'react';
import { ScrollView, StyleSheet, Button, Text, Image, Alert } from 'react-native';
import { ExpoLinksView } from '@expo/samples';



const counter = 0; 
const cam = require('../assets/images/sunMoonStars.png'); 
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
  	
  	let imageSource = pictureDisplay ? other : cam; 
  	let displayedText = pictureDisplay ? text1 : text2; 
    return (
      <ScrollView style={styles.container}>
         
         <Image style={styles.quoteImage} source= {imageSource} />
         <Text> {displayedText} </Text>


         <Button style = {styles.cheerUpButton}
          onPress={() => {
                Alert.alert('You tapped the button!', 'Text');
              }}
              title="Cheer Up"
              color="#fff"
        />
         
          
      </ScrollView>
    );
  }
}
onPressButton = () => {
    Alert.alert(
    'Alert Title',
    'My Alert Message')
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    backgroundColor: '#bc8abd',
    paddingLeft: 15,
    paddingRight: 15


  },
  quoteImage: {
    flex: 1,
    width: null,
    
    resizeMode: 'contain'
  }
});
