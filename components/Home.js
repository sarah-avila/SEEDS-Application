import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Button } from 'react-native';
import * as firebase from 'firebase';

class Home extends Component {
  state = { currentUser: null }

  componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
  }

    render() {
      const { currentUser } = this.state
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 25}}>Hi {currentUser && currentUser.email}!</Text>
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