import React from 'react'

import {
    Image,
    View,
    StyleSheet
} from 'react-native'
const Food_Image = (props) => {
    return (
        <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={props.food}/>

        </View>
    )
}

const styles = StyleSheet.create({//Estiliza o app. Adiciona CSS
    container: {
        //paddingTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image:{
        width: 390, height: 200
    }
})




export default Food_Image