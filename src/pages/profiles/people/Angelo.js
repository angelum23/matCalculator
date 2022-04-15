import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Angelo() {
    return (
        <View style={styles.container}>

            <Text style={[styles.headline]}>{"\n"}Ângelo José da Rosa</Text>
            <Text style={[styles.headline]}>19 anos</Text>
            <Text style={[styles.headline]}>Enhenharia de software{"\n"} </Text>

            <View style={[styles.views, styles.ident1]}>
                <Text style={{ fontSize: 20,fontWeight: 'bold', textAlign: 'center' }}>Honors:</Text>
                <Text style={{ fontSize: 15, textAlign: 'center' }}>{"\n"} FullStack {"\n"} Durmo 14 minutos por dia</Text>
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
        fontSize: 20,
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
