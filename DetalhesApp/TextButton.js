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

const TextButton = (props) => {
    return (
        <View
            style = {styles.container}>
            <StatusBar backgroundColor='white' />


            <TouchableOpacity
                onPress={props.onPress}
                style={styles.iconContainer}>
                <Image
                    style={styles.icon}
                    source={props.icon} />
                <Text style = {styles.text}>{props.text}</Text>
            </TouchableOpacity>


        </View>
    )
}

const styles = StyleSheet.create({//Estiliza o app. Adiciona CSS
    container: {
        //backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        left:15
    },
    iconContainer:{
        //backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        //Onde tem Status bar: <StatusBar translucent />
        //paddingHorizontal: 8,
        paddingVertical: 10,
        //left:8,
        //position: 'absolute',

    },
    icon: {
        tintColor: '#19B89D',//Cor de uma imagem
    },
    text: {
        //backgroundColor: 'blue',
        //position: 'absolute',
        paddingHorizontal: 8,
        top: 0,
        bottom: 0,
        left: 0,
        right: 50,
        fontSize: 17,//Tamanho da fonte
        //fontWeight: '900',//Peso da fonte (Negrito)
        color: '#19B89D',//Cor da fonte
        //textAlign: 'left'
    }

})

export default TextButton

