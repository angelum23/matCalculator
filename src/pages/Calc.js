import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, BackHandler } from 'react-native';

export default function Calc(){
    return(
        <View style={styles.container}>
            
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
    }
});