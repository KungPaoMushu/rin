// ItemComponent.js

import React, { Component } from 'react';
import {  View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

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

  // {this.props.items.map((item, index) => {
        //     return (
        //         <View key={index}>
        //             <Text style={styles.itemtext}>{item.name}</Text>
        //         </View>
        //     )

