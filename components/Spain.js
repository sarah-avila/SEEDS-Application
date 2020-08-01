import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Button } from 'react-native';
 

class Spain extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>Spain Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    headerText: {
      fontSize: 40,
      textAlign: "center",
      margin: 10
    },
  
  });
  

export default Spain;