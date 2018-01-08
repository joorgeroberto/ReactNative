import React, { Component } from 'react'
import {View, Alert, Platform, StyleSheet,ScrollView} from 'react-native'
import Header from "./Header";
import Food_Image from "./Food_Image";
import Header2 from "./Header2";
import Informacoes from "./Informacoes";
import TextButton from "./TextButton";
import Header3 from "./Header3";


export default class App extends Component {
  onPressBack = () => {
      Alert.alert('Seta pressionada')
  }
  onPressShare=()=>{
      Alert.alert('Compartilhar')
  }
  onPressAlert=()=>{
      Alert.alert('Alerta ativado')
  }
  onPressAlert=()=>{
      Alert.alert('Como chegar')
  }
  render () {
      return (
          <ScrollView contentContainerStyle={{paddingVertical: 0}}>

            <View>
                <Header
                    onPress={this.onPressBack}
                    icon={require('./Assets/back-arrow-icon.png')}
                    title={('Detalhes'.toUpperCase())}
                />
                <Food_Image
                    food={require('./Assets/food.png')}
                />
                <Header2
                    title={('Oficina: Culinária Vegana')}
                    text={('Facilitadoras: Bruna Lz \ne Andréa Gianzante')}
                    onPress={this.onPressShare}
                    icon={require('./Assets/share-icon.png')}
                />
                <TextButton
                    onPress={this.onPressAlert}
                    icon={require('./Assets/alert-icon.png')}
                    text={'Ativar alerta'}

                />
                <Informacoes
                    icon={require('./Assets/watch-icon.png')}
                    text={'Quinta-feira, 14 de janeiro\n19:00 até 22:00'}
                />
                <Informacoes
                    icon={require('./Assets/pin-icon.png')}
                    text={' Local: Assis (em frente ao Espaço Emes)'}
                />
                <TextButton
                    onPress={this.onPressAlert}
                    icon={require('./Assets/location-icon.png')}
                    text={'  Como chegar'}

                />
                <Header3
                    title={('Sobre')}
                    text={('20 vagas\nInscrição: envio de número do ingresso +\nnome completo + RG para\noficinas@zons.art.br\nContribuição Espontânea ao final da oficina')}
                    //onPress={this.onPressShare}
                    //icon={require('./Assets/share-icon.png')}
                />
            </View>
          </ScrollView>
      )
  }
}
