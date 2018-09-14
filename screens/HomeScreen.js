import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

import {TestComponent} from './../components/AppComponents';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
          
        <Image style={styles.logoImage} source= {require('../assets/images/logo.png')} />

        <Button title='Add an Item' onPress={() => this.props.navigation.navigate('AddItemScreen')}/>

        <Image style={styles.collageImage} source= {require('../assets/images/photoCollage.png')} />


      </View>

    );
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: '#bc8abd',
  },
  collageViewContainer: {
    backgroundColor: '#fff'
  },
  collageImage:
  {
    flex: 1,
    width: null,
    height: null,
    //resizeMode: 'contain',
    marginBottom: 0
  },
  logoImageContainer: {
    backgroundColor: '#fff'
  },
  logoImage:
  {
    flex: 1, 
    width: null, 
    height: null, 
    resizeMode: 'contain',
    margin: 15
  }
  
});
