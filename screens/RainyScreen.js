import React from 'react';
import { ScrollView, StyleSheet, Button, Alert, Image, View, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';


let databaseText = "Text from Database";

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Rainy Day',
  };



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
        {databaseText}
      </Text> 
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
  }
});
