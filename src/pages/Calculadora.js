import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, BackHandler } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { LineChart, Grid, YAxis, XAxis } from 'react-native-svg-charts';
import axios from 'axios';


export default function Calculadora(){
    const [dadosX, setDadosX] = useState([-12, 10, 95, 48, 24, -9, -61, 12, 33, 0, 24, 20, 50])
    const [dadosY, setDadosY] = useState([-12, 10, 95, 48, 24, -9, -61, 12, 33, 0, 24, 20, 50])
    const [graph, setGraph] = useState(''); //setGra
    const [input, setInput] = useState(''); //valores bind

    function executaClique(key){
        let novoValor = input,
            ehQuadrado = input.slice(-1) == 'x' && key == 'x';

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
        console.log(data);
        if(typeof data == 'number') {
            setInput(data);
            return;
        }

        setDadosX(data.x);
        setDadosY(data.y);
    }

    function executaApagar(){
        let _input = input;

        _input = _input.slice(0,-1)

        setInput(_input);
    }
    function executaApagarTudo(){
        setInput('')
    }

    return(
        <View style={styles.container}>

            <View style={{flexDirection: 'row'}}>
                <YAxis
                    style={{marginBottom: 29, marginRight: 5}}
                    data={dadosY}
                    svg={{
                        fill: 'grey',
                        fontSize: 20,
                    }}
                    numberOfTicks={1}
                />
                <LineChart
                    style={styles.lineChart}
                    gridMin={-100}
                    gridMax={100}
                    data={dadosY}
                    svg={{ stroke: 'rgb(134, 65, 244)', }}
                    numberOfTicks = {1}
                    >
                    <Grid direction='HORIZONTAL'/>
                    <Grid direction='VERTICAL'/>
                </LineChart>
            </View>

            <XAxis
                style= {{}}
                data={[0]}
                svg={{
                    fill: 'grey',
                    fontSize: 20
                }}
                numberOfTicks={1}
            />


        
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

                    <TouchableOpacity style={styles.button} onPress={() => executaApagarTudo('')}>
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

                    <TouchableOpacity style={styles.button} onPress={() => executaApagar('')}>
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

                    <TouchableOpacity style={styles.button} onPress={() => executaClique('/')}>
                    <Text style={styles.buttonText}>/</Text>
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

                    <TouchableOpacity style={styles.button} onPress={() => executaClique('*')}>
                    <Text style={styles.buttonText}>*</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.linha}>
                    <TouchableOpacity style={styles.button} onPress={() => executaClique('x')}>
                    <Text style={styles.buttonText}>x⁽²⁾</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => executaClique(',')}>
                    <Text style={styles.buttonText}>,</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.button} onPress={() => executaClique('=')}>
                    <Text style={styles.buttonText}>=</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => executaClique('-')}>
                    <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.linha}>
                    <TouchableOpacity style={styles.buttonEnviar} onPress={() => executaEnviar('x')}>
                    <Text style={styles.buttonText}>Enviar</Text>
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
        height: 420,
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
    lineChart: 
    {
        height: 220,
        width: 200,
        backgroundColor: '#EEEEEE'
    }
});