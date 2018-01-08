import React from 'react'

import {
    Image,
    Text,
    TouchableOpacity,
    View,
    StyleSheet,
    Platform,
    StatusBar
} from 'react-native'

const Informacoes = (props) => {
    return(
        <View style = {styles.container}>
            <Image
                style={styles.icon}
                source={props.icon} />
            <Text style = {styles.text}>{props.text}</Text>
        </View>
    )

}

const styles = StyleSheet.create({//Estiliza o app. Adiciona CSS
    container: {
        //backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        left:15,
        //top:10,
        //bottom:10
        paddingVertical: 10,

    },
    iconContainer:{
        backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        //Onde tem Status bar: <StatusBar translucent />
        //paddingHorizontal: 8,
        paddingVertical: 10,
        left:10,
        bottom:0
        //position: 'absolute',

    },
    icon: {
        tintColor: '#8F8E94',//Cor de uma imagem
    },
    text: {
        //backgroundColor: 'blue',
        //position: 'absolute',
        paddingHorizontal: 8,
        paddingVertical:2,
        top: 0,
        bottom: 0,
        left: 3,
        right: 50,
        fontSize: 17,//Tamanho da fonte
        //fontWeight: '900',//Peso da fonte (Negrito)
        color: '#8F8E94',//Cor da fonte
        //textAlign: 'left'
    }

})
export default Informacoes