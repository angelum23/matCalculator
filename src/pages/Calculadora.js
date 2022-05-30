import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, BackHandler } from 'react-native';
import { TextInput } from "react-native-gesture-handler";

var initialState = {
    displayValue: '0',
    operator: null,
    firstValue: '',
    secondValue: '',
    nextValue: false
}

function executaClique(key){
    switch (key) {
        case 1:
            displayValue = displayValue + '1'
            break;
    
        default:
            break;
    }
}

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

                <View style={{flexDirection: "row"}}>
                    <TouchableOpacity style={styles.button} onPress={() => this.executaClique(1)} >
                    <Text style={styles.buttonText}>1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} /* onPress={() => x} */>
                    <Text style={styles.buttonText}>2</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.button} /* onPress={() => x} */>
                    <Text style={styles.buttonText}>3</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} /* onPress={() => x} */>
                    <Text style={styles.buttonText}>/</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: "row"}}>
                    <TouchableOpacity style={styles.button} /* onPress={() => x} */>
                    <Text style={styles.buttonText}>4</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} /* onPress={() => x} */>
                    <Text style={styles.buttonText}>5</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.button} /* onPress={() => x} */>
                    <Text style={styles.buttonText}>6</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} /* onPress={() => x} */>
                    <Text style={styles.buttonText}>x</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: "row"}}>
                    <TouchableOpacity style={styles.button} /* onPress={() => x} */>
                    <Text style={styles.buttonText}>7</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} /* onPress={() => x} */>
                    <Text style={styles.buttonText}>8</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.button} /* onPress={() => x} */>
                    <Text style={styles.buttonText}>9</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} /* onPress={() => x} */>
                    <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: "row"}}>
                    <TouchableOpacity style={styles.button} /* onPress={() => x} */>
                    <Text style={styles.buttonText}>+/-</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} /* onPress={() => x} */>
                    <Text style={styles.buttonText}>,</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.button} /* onPress={() => x} */>
                    <Text style={styles.buttonText}>0</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} /* onPress={() => x} */>
                    <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: "row"}}>
                    <TouchableOpacity style={styles.button} /* onPress={() => x} */>
                    <Text style={styles.buttonText}>x</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} /* onPress={() => x} */>
                    <Text style={styles.buttonText}>(</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.button} /* onPress={() => x} */>
                    <Text style={styles.buttonText}>)</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} /* onPress={() => x} */>
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