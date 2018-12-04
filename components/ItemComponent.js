// ItemComponent.js

import React, { Component } from 'react';
import {  View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    itemsList: {
        flex: 1,
        
        justifyContent: 'space-around',
    },
    itemtext: {
        fontSize: 16,
        // fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default class ItemComponent extends Component {

  static propTypes = {
      item: PropTypes.any,
  };

  render() {
    return (
      <View style={styles.itemsList}>
      
        <Text style={styles.itemtext}>
        {this.props.item.name}
        </Text>


      </View>
    );
  }
}

