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

const Header2 = (props) => {
    return (
        <View style = {styles.container_column}>
            <Text style = {styles.title}>{props.title}</Text>
            <Text style = {styles.text}>{props.text}</Text>
            <TouchableOpacity
                    onPress={props.onPress}
                    style={styles.iconContainer}>
                    <Image
                        style={styles.icon}
                        source={props.icon} />
            </TouchableOpacity>


        </View>
    )
}

const styles = StyleSheet.create({//Estiliza o app. Adiciona CSS
    container_row: {
        //backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20

    },
    container_column: {
        //backgroundColor: 'green',
        flexDirection: 'column',
        alignItems: 'center',
        paddingVertical:50,
    },
    iconContainer:{
        //backgroundColor: 'red',
        //Onde tem Status bar: <StatusBar translucent />
        paddingHorizontal: 15,
        paddingVertical: 15,
        left: 160,
        top:20,
        bottom: 0,
    },
    icon: {
        tintColor: '#19B89D',//Cor de uma imagem
    },
    title: {
        //backgroundColor: 'blue',
        position: 'absolute',
        top: 15,
        bottom: 0,
        left: 15,
        right: 0,
        fontSize: 20,//Tamanho da fonte
        fontWeight: '900',//Peso da fonte (Negrito)
        color: '#18203F',//Cor da fonte
        textAlign: 'left'
    },
    text:{
        //backgroundColor: 'blue',
        position: 'absolute',
        top: 45,
        bottom: 0,
        left: 15,
        right: 0,
        fontSize: 17,//Tamanho da fonte
        //fontWeight: '900',//Peso da fonte (Negrito)
        color: '#8F8E94',//Cor da fonte
        textAlign: 'left'
    }

})
export default Header2