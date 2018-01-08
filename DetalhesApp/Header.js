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

const Header = (props) => {
    return (
        <View style = {styles.container}>
            <StatusBar backgroundColor='white' />
            <Text style = {styles.title}>{props.title.toUpperCase()}</Text>
            <TouchableOpacity
                onPress={props.onPress}
                style={styles.iconContainer}>
                <Image
                    style={styles.icon}
                    source={props.icone} />
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({//Estiliza o app. Adiciona CSS
    container: {
        //backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        ...Platform.select({//Seleciona a plataforma para comecar em baixo se for IOS. Se for android nao precisa baixar pq no padrao ja fica embaixo
            ios:{
                paddingTop: 20
            }
        })
    },
    iconContainer:{
        //backgroundColor: 'red',
        //Onde tem Status bar: <StatusBar translucent />
        paddingHorizontal: 15,
        paddingVertical: 20
    },
    icon: {
        tintColor: '#19B89D',//Cor de uma imagem
    },
    title: {
        //backgroundColor: 'blue',
        position: 'absolute',
        top: 15,
        bottom: 0,
        left: 0,
        right: 0,
        fontSize: 20,//Tamanho da fonte
        fontWeight: '900',//Peso da fonte (Negrito)
        color: '#18203F',//Cor da fonte
        textAlign: 'center'
    }

})
export default Header