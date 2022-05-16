import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, BackHandler } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Home({navigation}) {
    return (
      <View style={styles.container}>
            <TouchableOpacity style={styles.ident1} onPress={() => navigation.navigate('Profile', {
                Nome: 'Ângelo', Idade: '19 Anos', Curso: 'Engenharia de software', Honors: ['Honors:'], Foto: '../../assets/maromba.jpg'
                })}>
                <Text style={{ fontSize: 20,fontWeight: 'bold' }}>Angelo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.ident1}  onPress={() => navigation.navigate('Profile', {
                Nome: 'Gabriela', Idade: '17 Anos', Curso: 'Engenharia de software', Honors: ['Honors:'], Foto: '../../assets/maromba.jpg'   
                })} >
                <Text style={{ fontSize: 20,fontWeight: 'bold' }}>Gabriela</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.ident1} onPress={() => navigation.navigate('Profile',  {
                Nome: 'Samuel', Idade: '19 Anos', Curso: 'Engenharia de software', Honors: ['Honors:'], Foto: '../../assets/maromba.jpg'  
                })} >
                <Text style={{ fontSize: 20,fontWeight: 'bold' }}>Samuel</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.ident1} onPress={() => navigation.navigate('Profile', {
                Nome: 'Vinicius', Idade: '18 Anos', Curso: 'Engenharia de software', Honors: ['Honors:'], Foto: '../../assets/maromba.jpg'    
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
      backgroundColor:'lightgray',
      shadowColor: 'black',
      borderRadius: 10,
      width: 250,
      height: 100,
      shadowOpacity: 0.2,
      shadowRadius: 5,
      shadowOffset: {width: 0, height: 2},
      elevation: 5,
      margin: 20,
  },
});