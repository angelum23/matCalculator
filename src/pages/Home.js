import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, BackHandler } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Home({navigation}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.ident1} onPress={() => navigation.navigate('Calculadora')}>
                <Text style={{ fontSize: 20,fontWeight: 'bold' }}>Calculadora</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.ident1} onPress={() => navigation.navigate('Profiles')}>
                <Text style={{ fontSize: 20,fontWeight: 'bold' }}>Perfil</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "column",
        paddingTop: 40,
    },
  
    ident1: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#646381',
        shadowColor: 'black',
        borderRadius: 10,
        width: '65%',
        height: 150,
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: {width: 0, height: 2},
        elevation: 5,
        margin: 20,
    },
});