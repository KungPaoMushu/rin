import React from 'react';
import { ScrollView, StyleSheet, Button, Text, Image, Alert, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { db, storage } from '../db.js';
import MemoryComponent from '../components/MemoryComponent';

let urlsRef = db.ref('/url');

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

  state = {
        urls: []
    }

    componentDidMount() {

        urlsRef.on('value', (snapshot) => {
            let data = snapshot.val();
            let urls = Object.values(data);
            this.setState({urls});
         });
    }


  render() {
  
    return (
      
      <ScrollView style={styles.container} contentContainerStyle = {styles.center}>
        
        <Image source= {require('../assets/images/sunMoonStars.png')} />

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

     <View style = {styles.cheerUpTextContainer}>
      
      <Text style = {styles.cheerUpText}>
         {
                    this.state.urls.length > 0
                    ? <MemoryComponent urls={this.state.urls} />
                    : <Text>No URLs</Text>
                }

      </Text> 

      <Text>
      

      {this.state.urls.length}
      

      </Text> 
    </View>

          
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
   padding: 15, 
    
  },
  quoteImage:
  {
    resizeMode: 'cover'
  },
  buttonContainer: {
    marginTop: 25,
    backgroundColor: '#eeccff',
    marginBottom: 50
  },
  
});
