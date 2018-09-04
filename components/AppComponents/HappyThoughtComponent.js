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
      thought: PropTypes.array.isRequired
  };

  render() {
    return (
      <View style={styles.itemsList}>
        {this.props.thought.map((item, index) => {
            return (
                <View key={index}>
                    <Text style={styles.thoughttext}>{thought.name}</Text>
                </View>
            )
        })}
      </View>
    );
  }
}