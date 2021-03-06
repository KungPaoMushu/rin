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

export default class HappyThoughtComponent extends Component {

  static propTypes = {
      thoughts: PropTypes.array.isRequired
  };

  render() {
    return (
      <View style={styles.itemsList}>
        {this.props.thoughts.map((thoughts, index) => {
            return (
                <View key={index}>
                    <Text style={styles.thoughttext}>{thoughts.name}</Text>
                </View>
            )
        })}
      </View>
    );
  }
}