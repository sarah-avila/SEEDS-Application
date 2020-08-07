import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Button } from 'react-native';

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>Home Screen</Text>
                <Button title="----------- UK Info -----------" onPress={() => this.props.navigation.navigate('Info', {countryId: 0})}/>
                <Button title="----------- US Info -----------" onPress={() => this.props.navigation.navigate('Info', {countryId: 1})}/>
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
  

export default Home;