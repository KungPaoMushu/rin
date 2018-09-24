// MemoryComponent.js

import React, { Component } from 'react';
import {  View, Text, StyleSheet, Image} from 'react-native';
import PropTypes from 'prop-types';
import { db, storage } from '../db.js';

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

  state = {
        url: 'hellp'
    }

//   componentDidMount() {

//        getImageURL('1537052967');
//     }

// getImageURL(imageName) {
//   storage.ref('images').child(imageName).getDownloadURL().then(url => {
//             console.log(url);
//             this.setState({url});
//         })
    
// }

  render() {
    return (
      <View style={styles.urlsList}>
        {this.props.urls.map((urls, index) => {
            return (
                <View key={index}>
                   
                    <Text style={styles.urlstext}>{urls.name}</Text>
                    


                     <Image source= {require('../assets/images/sadUnicornTransparent.png')} />

                   <Text> {this.state.url} </Text> 

                    
                </View>
            )
        })}
      </View>
    );
  }
}