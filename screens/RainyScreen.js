import React from 'react';
import { ScrollView, StyleSheet, Button, Alert, Image, View, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import HappyThoughtComponent from '../components/AppComponents/HappyThoughtComponent';
import { db } from '../db.js';
import ItemComponent from '../components/ItemComponent';


//items
let itemsRef = db.ref('/items');


export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Rainy Day',
  };

  state = {
        items: [],
        randomIndex: 0, 
        pressed: false
        
    }

    componentDidMount() {

        itemsRef.on('value', (snapshot) => {
            let data = snapshot.val();
            let items = Object.values(data);
            this.setState({items});
            console.log(items); 
            this.setIndex(); 
           
         });
    }

  newIndex = () => {
    randomIndex = Math.floor(Math.random()*this.state.items.length); 
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
      

      <View style={styles.container} contentContainerStyle = {styles.center}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
      <Image style= {styles.unicornImage} source= {require('../assets/images/sadUnicornTransparent.png')} />
      <View style = {styles.cheerUpButtonContainer}>
        <Button
          onPress={() => {
              
                this.firstPress(); 
                this.setIndex();
                

              }}
              title="Press"
              color="#fff"
        />
    </View>

    
    <View style = {styles.cheerUpTextContainer}>
      
      <Text style = {styles.cheerUpText}>
         {
                    this.state.items.length > 0 && this.state.pressed == true
                    ? <ItemComponent item={this.state.items[this.state.randomIndex]} />
                    : <Text>You haven't pressed me :(</Text>
                }

      </Text> 

      }
    </View>
    <View style={styles.container}>
               
            </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#bc8abd',
    alignItems: 'center'
  },
  center: {
    alignItems: 'center',
    
  },
  cheerUpButtonContainer: {
    marginTop: 25,
    backgroundColor: '#eeccff',
    width: 100,
    height: 40
    
  },

  cheerUpTextContainer:
  {
  //backgroundColor: '#eeccff',
  padding: 15, 
  width: 320,
  height: 200,
  alignItems: 'center'
  }, 

  cheerUpText:
  {
    color: '#fff'
  },
  thoughtContainer:
  {
    backgroundColor: '#fff',
    flex: 1
  },
  unicornImage:
  {
    height: 300,
    width: 300
  }
});
