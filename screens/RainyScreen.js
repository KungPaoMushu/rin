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
        randomIndex: 0
    }

    componentDidMount() {

        itemsRef.on('value', (snapshot) => {
            let data = snapshot.val();
            let items = Object.values(data);
            this.setState({items});
            console.log(items); 
            randomIndex = Math.floor(Math.random()*this.state.items.length); 
            this.setState({randomIndex});
         });
    }

    
  render() {
    return (
      

      <ScrollView style={styles.container} contentContainerStyle = {styles.center}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
      <Image source= {require('../assets/images/sadUnicornTransparent.png')} />
      <View style = {styles.cheerUpButtonContainer}>
        <Button style = {styles.cheerUpButton}
          onPress={() => {
                Alert.alert('You tapped the button!');
                
                

              }}
              title="Cheer Up"
              color="#fff"
        />
    </View>

    
    <View style = {styles.cheerUpTextContainer}>
      
      <Text style = {styles.cheerUpText}>
         {
                    this.state.items.length > 0
                    ? <ItemComponent item={this.state.items[this.state.randomIndex]} />
                    : <Text>No items</Text>
                }

      </Text> 

      <Text>
      

      {this.state.items.length}
      {console.log(this.state.items)}
       
      

      </Text> 
      }
    </View>
    <View style={styles.container}>
               
            </View>

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
  cheerUpButtonContainer: {
    marginTop: 25,
    backgroundColor: '#eeccff',
    
  },

  cheerUpTextContainer:
  {
    //backgroundColor: '#eeccff',
    margin: 15, 
    paddingTop: 15, 
    paddingBottom: 15, 
    paddingLeft: 100,
    paddingRight: 100
  }, 

  cheerUpText:
  {
    color: '#fff'
  },
  thoughtContainer:
  {
    backgroundColor: '#fff',
    flex: 1

  }
});
