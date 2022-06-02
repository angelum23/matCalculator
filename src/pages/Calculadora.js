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
    }

    function executaEnviar(key){
    }

    function executaApagar(){
        let _input = input;

        _input = _input.slice(0,-1)

        setInput(_input);
    }
    function executaApagarTudo(){
        setInput("")
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

                <View style={styles.linha}>
                    <TouchableOpacity style={styles.button}  onPress={() => executaClique(1)} >
                    <Text style={styles.buttonText}>1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => executaClique(2)}>
                    <Text style={styles.buttonText}>2</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.button} onPress={() => executaClique(3)}>
                    <Text style={styles.buttonText}>3</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => executaApagarTudo("")}>
                    <Text style={styles.buttonText}>CE</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.linha}>
                    <TouchableOpacity style={styles.button} onPress={() => executaClique(4)}>
                    <Text style={styles.buttonText}>4</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => executaClique(5)}>
                    <Text style={styles.buttonText}>5</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.button} onPress={() => executaClique(6)}>
                    <Text style={styles.buttonText}>6</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => executaApagar("")}>
                    <Text style={styles.buttonText}>C</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.linha}>
                    <TouchableOpacity style={styles.button} onPress={() => executaClique(7)}>
                    <Text style={styles.buttonText}>7</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => executaClique(8)}>
                    <Text style={styles.buttonText}>8</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.button} onPress={() => executaClique(9)}>
                    <Text style={styles.buttonText}>9</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => executaClique("/")}>
                    <Text style={styles.buttonText}>/</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.linha}>
                    <TouchableOpacity style={styles.button} onPress={() => executaClique("(")}>
                    <Text style={styles.buttonText}>(</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => executaClique(")")}>
                    <Text style={styles.buttonText}>)</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.button} onPress={() => executaClique(0)}>
                    <Text style={styles.buttonText}>0</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => executaClique("*")}>
                    <Text style={styles.buttonText}>*</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.linha}>
                    <TouchableOpacity style={styles.button} onPress={() => executaClique("x")}>
                    <Text style={styles.buttonText}>x</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => executaClique(",")}>
                    <Text style={styles.buttonText}>,</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.button} onPress={() => executaClique("=")}>
                    <Text style={styles.buttonText}>=</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => executaClique("-")}>
                    <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.linha}>
                    <TouchableOpacity style={styles.buttonEnviar} onPress={() => executaEnviar("x")}>
                    <Text style={styles.buttonText}>Enviar</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.button} onPress={() => executaClique("+")}>
                    <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={{flex:1}}></View>
            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEEEEE',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "column",
        paddingTop: 40,
        marginBottom: -10,
        flex: 1
    },
    textInput: { 
        marginTop: 20,
        marginBottom: 5,
        backgroundColor: '#b2b6ce', 
        borderRadius: 50, 
        padding: 15, 
        width: '95%',
        multiline: false
    },
    button: {
        marginRight: 6,
        marginTop: 2,
        marginBottom: 3,
        height: 50,
        backgroundColor: '#b2b6ce',
        borderRadius: 15,
        justifyContent: 'center',
        width: '23.5%'
    },

    buttonEnviar: {
        marginRight: 6,
        marginTop: 2,
        marginBottom: 3,
        width: '73.5%',
        height: 50,
        backgroundColor: '#b2b6ce',
        borderRadius: 15,
        justifyContent: 'center',
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
        backgroundColor:'#646381',
        shadowColor: 'black',
        borderRadius: 10,
        height: 420,
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: {width: 0, height: 2},
        elevation: 5,
        margin: 20,
        width: '95%'
    },

    linha: {
        flexDirection: "row",
        minWidth: '90%'
    }
});