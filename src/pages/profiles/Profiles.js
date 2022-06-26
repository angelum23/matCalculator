import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, BackHandler } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Home({navigation}) {
    return (
      <View style={styles.container}>
            <TouchableOpacity style={styles.ident1} onPress={() => navigation.navigate('Profile', {
                Nome: 'Ângelo J. da Rosa', Resto: ['19 Anos', 'Cocal do Sul - SC'], Foto: require('../../assets/angelo.jpeg')
                })}>
                <Text style={{ fontSize: 20,fontWeight: 'bold' }}>Angelo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.ident1}  onPress={() => navigation.navigate('Profile', {
                Nome: 'Gabriela de O. Gava', Resto: ['18 Anos', 'Nova Veneza - SC'], Foto: require('../../assets/gabriela.jpeg')   
                })} >
                <Text style={{ fontSize: 20,fontWeight: 'bold' }}>Gabriela</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.ident1} onPress={() => navigation.navigate('Profile',  {
                Nome: 'Samuel Souza Corrêa', Resto: ['20 Anos', 'Criciuma - SC', 'Procuro emprego'], Foto: require('../../assets/samuel.jpeg') 
                })} >
                <Text style={{ fontSize: 20,fontWeight: 'bold' }}>Samuel</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.ident1} onPress={() => navigation.navigate('Profile', {
                Nome: 'Vinicius', Resto: ['18 Anos', 'Criciuma - SC'], Foto: require('../../assets/vinicius.jpeg')   
                })} >
                <Text style={{ fontSize: 20,fontWeight: 'bold' }}>Vinicius</Text>
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
      height: 120,
      shadowOpacity: 0.2,
      shadowRadius: 5,
      shadowOffset: {width: 0, height: 2},
      elevation: 5,
      margin: 20,
  },
});