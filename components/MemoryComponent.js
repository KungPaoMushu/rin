// MemoryComponent.js

import React, { Component } from 'react';
import {  View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    urlsList: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    urlstext: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default class MemoryComponent extends Component {

  static propTypes = {
      urls: PropTypes.array.isRequired
  };

  render() {
    return (
      <View style={styles.urlsList}>
        {this.props.urls.map((urls, index) => {
            return (
                <View key={index}>
                    <Text style={styles.urlstext}>{urls.name}</Text>
                </View>
            )
        })}
      </View>
    );
  }
}