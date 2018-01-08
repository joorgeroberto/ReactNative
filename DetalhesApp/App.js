import React, { Component } from 'react'
import { View, Alert } from 'react-native'
import Header from "./Header";
import Food_Image from "./Food_Image";

export default class App extends Component {
  onPressBack = () => {
      Alert.alert('Seta pressionada')
  }
  render () {
      return (
            <View style={{
                }}>

                <Header
                    onPress={this.onPressBack}
                    icone={require('./Assets/back-arrow-icon.png')}
                    title={('Detalhes')} />
                <Food_Image
                    food={require('./Assets/food.png')}
                />
            </View>
      )
  }
}