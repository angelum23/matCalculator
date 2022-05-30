import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, BackHandler } from 'react-native';
import { TextInput } from "react-native-gesture-handler";
import { LineChart, Grid } from "react-native-svg-charts";


export default function Calculadora(){
    const [input, setInput] = useState(""); //valores bind
    const [operacao, setOperacao] = useState("");

    function executaClique(key){
        let novoValor = input;
        if (typeof key == "number") {
            novoValor += key.toString();
        }else{
            novoValor += key;
        }

        setInput(novoValor)
    }

    function executaMaisMenos(key){
        let novoValor = input;

        novoValor += + key.toString();

        setInput(novoValor)
    }

    function executaIgual(key){
        let novoValor = input;

        novoValor += + key.toString();

        setInput(novoValor)
    }

    return(
        <View style={styles.container}>
            <View style={{flex:1}}>
                <LineChart
                    style={{ height: 200 }}
                    data={[50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]}
                    svg={{ stroke: 'rgb(134, 65, 244)' }}
                    contentInset={{ top: 20, bottom: 20 }}
                >
                    <Grid />
                </LineChart>
            </View>

        

            <View style={styles.ident1}>
                <TextInput
                    style={styles.textInput}
                    editable
                    value={input}
                    maxLength={30}
                />

                <View style={{flexDirection: "row"}}>
                    <TouchableOpacity style={styles.button}  onPress={() => executaClique(1)} >
                    <Text style={styles.buttonText}>1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => executaClique(2)}>
                    <Text style={styles.buttonText}>2</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.button} onPress={() => executaClique(3)}>
                    <Text style={styles.buttonText}>3</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => executaClique("/")}>
                    <Text style={styles.buttonText}>/</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: "row"}}>
                    <TouchableOpacity style={styles.button} onPress={() => executaClique(4)}>
                    <Text style={styles.buttonText}>4</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => executaClique(5)}>
                    <Text style={styles.buttonText}>5</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.button} onPress={() => executaClique(6)}>
                    <Text style={styles.buttonText}>6</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => executaClique("*")}>
                    <Text style={styles.buttonText}>*</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: "row"}}>
                    <TouchableOpacity style={styles.button} onPress={() => executaClique(7)}>
                    <Text style={styles.buttonText}>7</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => executaClique(8)}>
                    <Text style={styles.buttonText}>8</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.button} onPress={() => executaClique(9)}>
                    <Text style={styles.buttonText}>9</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => executaClique("-")}>
                    <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: "row"}}>
                    <TouchableOpacity style={styles.button} onPress={() => executaMaisMenos(1)}>
                    <Text style={styles.buttonText}>+/-</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => executaClique(",")}>
                    <Text style={styles.buttonText}>,</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.button} onPress={() => executaClique(0)}>
                    <Text style={styles.buttonText}>0</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => executaClique("+")}>
                    <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: "row"}}>
                    <TouchableOpacity style={styles.button} onPress={() => executaClique("x")}>
                    <Text style={styles.buttonText}>x</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => executaClique("(")}>
                    <Text style={styles.buttonText}>(</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.button} onPress={() => executaClique(")")}>
                    <Text style={styles.buttonText}>)</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => executaIgual()}>
                    <Text style={styles.buttonText}>=</Text>
                    </TouchableOpacity>
                </View>
                
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
        marginBottom: 20,
        backgroundColor: 'white', 
        borderRadius: 50, 
        padding: 15, 
        width: 330,
        multiline: false
    },
    button: {
        margin: 4,
        width: 84,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 15,
        justifyContent: 'center'
    },
    buttonText: {
        justifyContent: 'center',
        textAlign: "center",
        fontSize: 20,
        fontWeight: 'bold'
    },

    ident1: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#aaaaaa',
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