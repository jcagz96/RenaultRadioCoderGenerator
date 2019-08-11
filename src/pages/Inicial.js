import React, { useState } from 'react';
import { KeyboardAvoidingView, View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Platform, Keyboard } from 'react-native';

import logo from '../assets/logo1.png';

export default function Inicial(){

    const [precode, setPrecode] = useState('');
    //const [code, setCode] = useState('');
    const [correspondencia, setCorrespondencia] = useState(null);

    function handleSearch(){
        
        const precodeToUpperCase = precode.toUpperCase();
        console.log(`Veio da  app: ${precodeToUpperCase}`);

        const valores = { A100: '0070',
        A101: '0041',
        A102: '0012',
        A103: '0082'};

        if (valores[precodeToUpperCase] !== undefined){        
            Keyboard.dismiss();
            console.log(`o valor de ${precodeToUpperCase} é ${valores[precodeToUpperCase]}`);
            //setCode(valores[precodeToUpperCase]);
            setPrecode(valores[precodeToUpperCase])
            setCorrespondencia(true);
        }
        else {
            console.log('valor nao encontrado ou inválido');
        }

        
    }

    return (
        
        <KeyboardAvoidingView
            behavior="padding"
            enabled={ Platform.OS === 'ios'}
            style={styles.container}
        >
            <Image source={logo}/>
            <Text>Enter the pre-codeee</Text>
            <TextInput
                style={styles.input}
                autoCorrect={false}
                keyboardType="ascii-capable"
                placeholder="Digite"
                placeholderTextColor="#999"
                value={precode}
                onChangeText={setPrecode}
                maxLength={4}/>

            <TouchableOpacity style={styles.button} onPress={handleSearch}>
                <Text style={styles.buttonText}>Gerar</Text>
            </TouchableOpacity>


            { correspondencia && (

                <View style={styles.correspondenciaContainer}>
                    <Text style={styles.correspondenciaBio}>O código do seu rádio é: </Text>
                    <Text style={styles.correspondenciaName}>{precode}</Text>
                    <TouchableOpacity onPress={()=> {setCorrespondencia(null); setPrecode('');}}>
                        <Text style={styles.correspondenciaClose}>FECHAR</Text>
                    </TouchableOpacity>
                </View>
            )}
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f2f6f1',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input:{
        textAlign : 'center',
        marginTop: 10,
        height: 38,
        width: 100,
        backgroundColor: '#FFF',
        borderWidth: 0,
        borderRadius: 4,
        paddingHorizontal: 15,
    },
    button: {
        height: 38,
        width: 100,
        backgroundColor: '#DF4723',
        borderRadius: 4,
        marginTop: 2,
        justifyContent: 'center',
    },
    buttonText:{
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    correspondenciaName:{
        fontSize: 26,
        fontWeight: 'bold',
        color: '#FFF',
    },

    correspondenciaContainer: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(255, 26, 26, 0.98)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    correspondenciaBio:{
        marginTop:10,
        fontSize: 16,
        color: 'rgba(255,255,255,0.8)',
        lineHeight: 24,
        textAlign: 'center',
        paddingHorizontal: 30,
    },

    correspondenciaClose:{
        fontSize:16,
        color: 'rgba(255,255,255,0.8)',
        textAlign: 'center',
        marginTop: 30,
        fontWeight: 'bold'
    },

});
