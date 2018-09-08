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
     
        <Image style= {styles.quoteImageContainer} source= {require('../assets/images/sunMoonStars.png')} />
       
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
    paddingTop: 15, 
    backgroundColor: '#bc8abd',

  
  },
  center: {
    alignItems: 'center',
    
  },
  quoteImage: {
    flex: 1, 
    height: null, 
    width: null, 
    marginLeft: 25,
    marginRight: 25, 

    
  },
  buttonContainer: {
    marginTop: 25,
    backgroundColor: '#eeccff',
    marginBottom: 50 
  },
  
});
