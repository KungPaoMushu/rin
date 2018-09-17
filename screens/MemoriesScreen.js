import React from 'react';
import { ScrollView, StyleSheet, Button, Text, Image, Alert, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

let displayedText = "text"
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
  
    return (
      
      <ScrollView style={styles.container} contentContainerStyle = {styles.center}>
        
        <View style = {styles.quoteImageContainer}>
        <Image source= {require('../assets/images/sunMoonStars.png')} />
        </View>

         <View style = {styles.buttonContainer}>
        <Button 
          onPress={() => {
                Alert.alert('You tapped the button!');
              }}
              title="Cheer Up"
              color="#fff"
        />
    </View>


     <Text> {displayedText} </Text>
          
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bc8abd',

  
  },
  center: {
    alignItems: 'center',
    
  },
  quoteImageContainer: {

   width: null,
   height: null,
   
    
  },
  quoteImage:
  {
    padding: 15
  },
  buttonContainer: {
    marginTop: 25,
    backgroundColor: '#eeccff',
    marginBottom: 50
  },
  
});
