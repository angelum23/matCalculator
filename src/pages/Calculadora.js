import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, BackHandler } from 'react-native';
import { TextInput } from "react-native-gesture-handler";

export default function Calculadora(){
    return(
        <View style={styles.container}>
            <View style={{flex:1}}></View>

            <View style={styles.ident1}>
                <TextInput
                    style={styles.textInput}
                    editable
                    maxLength={30}
                />
                <Button></Button>
                <View style={{flex:1}}></View>
            </View>
        </View>
    );
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
    textInput: { 
        marginTop: 30,
        backgroundColor: 'white', 
        borderRadius: 50, 
        padding: 15, 
        width: 330,
        multiline: false
    },
    button: {
        width: 50,
        height: 20
    },
    ident1: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'lightgray',
        shadowColor: 'black',
        borderRadius: 10,
        width: 380,
        height: 400,
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: {width: 0, height: 2},
        elevation: 5,
        margin: 20,
    },
});