import React from 'react';
import { ScrollView, StyleSheet, Button, Text, Image, Alert, View, TouchableOpacity } from 'react-native';
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

        <TouchableOpacity onPress={() => {
                this.firstPress(); 
                this.setIndex(); 
              }}>
          <Image
            style={styles.quoteImage}
            source= {require('../assets/images/sunMoonStars.png')}
          />
        </TouchableOpacity>

       <Text>
         {
          this.state.urls.length > 0 && this.state.pressed == true
          ? <MemoryComponent fileName={this.state.urls[this.state.randomIndex]} />
            : <Text>(Tap on the star)</Text>
          }
      </Text> 

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
    width: 350, 
    height: 300
  },
  buttonContainer: {
    marginTop: 25,
    backgroundColor: '#eeccff',
    marginBottom: 50
  },
  
});
