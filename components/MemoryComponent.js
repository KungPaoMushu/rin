// MemoryComponent.js

import React, { Component } from 'react';
import {  View, Text, StyleSheet, Image} from 'react-native';
import PropTypes from 'prop-types';
import { db, storage } from '../db.js';

const styles = StyleSheet.create({
    itemsList: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    itemtext: {
        fontSize: 10,
        fontWeight: 'bold',
        textAlign: 'center',
    }, 
    image: {
     height: 320,
     width: 300
    }
});

export default class ItemComponent extends Component {

  static propTypes = {
      fileName: PropTypes.any,
  };

  render() {
    return (
      <View style={styles.itemsList}>
      
        <Image style ={styles.image} source= {{uri: this.props.fileName.downloadURL}} />
    

      </View>
    );
  }
}

