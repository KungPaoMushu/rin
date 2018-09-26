import React from 'react';
import { ScrollView, StyleSheet, Button, Text, Image, Alert, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { db, storage } from '../db.js';
import MemoryComponent from '../components/MemoryComponent';

let urlsRef = db.ref('/url');

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
        urls: [],
        randomIndex: 0, 
        pressed: false
    }

    componentDidMount() {

        urlsRef.on('value', (snapshot) => {
            let data = snapshot.val();
            let urls = Object.values(data);
            this.setState({urls});
            this.setIndex(); 
         });
    }

  newIndex = () => {
    randomIndex = Math.floor(Math.random()*this.state.urls.length); 
  }

  firstPress = () => 
  {
    pressed = true;
    this.setState({pressed});
  }

  setIndex = () => {
    let prevIndex = this.state.randomIndex; 
    //while loop causes "no items"
    if (this.state.randomIndex == prevIndex)
    {
      this.newIndex(); 
    }
    prevIndex = this.state.randomIndex;
    this.setState({randomIndex});
  }

  render() {
  
    return (
      
      <ScrollView style={styles.container} contentContainerStyle = {styles.center}>
        
        <Image source= {require('../assets/images/sunMoonStars.png')} />

         <View style = {styles.buttonContainer}>
        <Button 
          onPress={() => {
                this.firstPress(); 
                this.setIndex(); 
              }}
              title="Cheer Up"
              color="#fff"
        />

        </View>



     <View style = {styles.cheerUpTextContainer}>
      
      <Text style = {styles.cheerUpText}>
         {
                    this.state.urls.length > 0 && this.state.pressed == true
                    ? <MemoryComponent fileName={this.state.urls[this.state.randomIndex]} />
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
