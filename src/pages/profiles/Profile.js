import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Profile({ route, navigation }) {
    const { Nome, Resto, Foto } = route.params;

    return (
        <View style={styles.container}>

            <Image
                style={styles.image}
                source={Foto}
            />

            <View style={[styles.views, styles.ident1]}>
                <Text style={[styles.desc]}>{Resto[0]}</Text>
                <Text style={[styles.desc]}>{Resto[1]}</Text>
                <Text style={[styles.desc]}>{Resto[2]}</Text>
             </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    headline: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    views: {
        width: 300,
        height: 300,
        margin: 15,
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center",
    },

    desc: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    image: {
        width: 150, 
        height: 150,
        alignItems: 'center',
        borderRadius: 100
    },
  
    ident1: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'lightgray',
        shadowColor: 'black',
        borderRadius: 10,
        width: 300,
        height: 200,
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: {width: 0, height: 2},
        elevation: 5,
        margin: 20,
    },
});
