// MemoryComponent.js

import React, { Component } from 'react';
import {  View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import { db, storage } from '../db.js';

const styles = StyleSheet.create({
    itemsList: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    itemtext: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default class ItemComponent extends Component {

  static propTypes = {
      fileName: PropTypes.any,
  };

  render() {
    return (
      <View style={styles.itemsList}>
      
        <Text style={styles.itemtext}>
        {this.props.fileName.name}
        </Text>


      </View>
    );
  }
}