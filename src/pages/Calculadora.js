import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, BackHandler } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { LineChart, Grid, YAxis, XAxis } from 'react-native-svg-charts';
import axios from 'axios';


export default function Calculadora(){
    const [dadosX, setDadosX] = useState([])
    const [dadosY, setDadosY] = useState([])
    const [input, setInput] = useState('');
    const [exibeZero, setExibe] = useState(0);

    function executaClique(key){
        let novoValor = input.toString(),
            ehQuadrado = novoValor.slice(-1) == 'x' && key == 'x';

        if (typeof key == 'number') {
            novoValor += key.toString();
        }else{
            novoValor += ehQuadrado ? '²' : key;
        }

        setInput(novoValor)
    }

    async function executaEnviar(){
        let _input = input;
        const { data } = await axios.post(`http://127.0.0.1:5000/montaGrafico?formula=${_input}`);
        if(typeof data == 'number') {
            setInput(data);
            return;
        }
        if(typeof data == 'string') {
            return setInput(data);
        }
        setDadosX(data.x);
        setDadosY(data.y);
        setExibe(1);
    }

    function executaApagar(){
        let _input = input.toString();

        _input = _input.slice(0,-1)

        setInput(_input);
    }

    return(
        <View style={styles.container}>

            <View style={{flexDirection: 'column'}}>
                {exibeZero ? (
                    <Text style={{width: 300, alignItems: 'center', textAlign: 'center', color: 'gray'}}>0</Text>
                ):<Text></Text>}
                {exibeZero ? (
                    <View style={styles.line}></View>
                ):<Text></Text>}
                <LineChart
                    style={styles.lineChart}
                    data={dadosY}
                    svg={{ stroke: 'rgb(134, 65, 244)', }}
                    numberOfTicks = {1}
                    contentInset={{ top: 20, bottom: 20 }}
                    >
                    <Grid/>
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

                    <TouchableOpacity style={styles.button} onPress={() => executaApagar('')}>
                    <Text style={styles.buttonText}>C</Text>
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

                    <TouchableOpacity style={styles.button} onPress={() => executaClique('/')}>
                    <Text style={styles.buttonText}>/</Text>
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

                    <TouchableOpacity style={styles.button} onPress={() => executaClique('*')}>
                    <Text style={styles.buttonText}>*</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.linha}>
                    <TouchableOpacity style={styles.button} onPress={() => executaClique('(')}>
                    <Text style={styles.buttonText}>(</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => executaClique(')')}>
                    <Text style={styles.buttonText}>)</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.button} onPress={() => executaClique(0)}>
                    <Text style={styles.buttonText}>0</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => executaClique('-')}>
                    <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.linha}>
                    <TouchableOpacity style={styles.button} onPress={() => executaClique('x')}>
                    <Text style={styles.buttonText}>x⁽²⁾</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => executaClique(',')}>
                    <Text style={styles.buttonText}>,</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.button} onPress={() => executaEnviar('x')}>
                    <Text style={styles.buttonText}>=</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => executaClique('+')}>
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
        flexDirection: 'column',
    },
    textInput: { 
        marginTop: 20,
        marginBottom: 10,
        backgroundColor: '#b2b6ce', 
        borderRadius: 50, 
        padding: 15, 
        width: '95%'
    },
    button: {
        marginRight: 6,
        marginTop: 3,
        marginBottom: 5,
        height: 55,
        backgroundColor: '#b2b6ce',
        borderRadius: 15,
        justifyContent: 'center',
        width: '23.5%'
    },

    buttonText: {
        justifyContent: 'center',
        textAlign: 'center',
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
        height: 400,
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: {width: 0, height: 2},
        elevation: 5,
        margin: 20,
        width: '95%'
    },

    linha: {
        flexDirection: 'row',
        minWidth: '90%'
    },
    line: {
        marginTop: 20,
        height: 200,
        width: 1,
        color: 'lightgray',
        backgroundColor: 'lightgray',
        position: 'absolute',
        alignSelf:'center'
    },
    lineChart: 
    {
        height: 220,
        width: 300,
        color: 'gray'
    }
});