import React from 'react';
import { ScrollView, StyleSheet, Button, Alert, Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Rainy Day',
  };

  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle = {styles.center}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
      <Image source= {require('../assets/images/sadUnicorn.jpg')} />
        <Button style = {styles.cheerUpButton}
  onPress={() => {
        Alert.alert('You tapped the button!');
      }}
      title="Cheer Up"
      color="#841584"
    />
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
  center: {
    alignItems: 'center',
    
  },
  cheerUpButton: {
    paddingTop: 40,
  }
});
