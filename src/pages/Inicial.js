import React, { useState } from 'react';
import { KeyboardAvoidingView, View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Platform } from 'react-native';

import logo from '../assets/logo.png';

export default function Inicial(){

    const [code, setCode] = useState('')

    function handleSearch(){
        const codeToUpperCase = code.toUpperCase();
        console.log(`Veio da  app: ${codeToUpperCase}`);

        const valores = { A100: '0070',
        A101: '0041',
        A102: '0012',
        A103: '0082'};

        if (valores[codeToUpperCase] !== undefined){
            console.log(`o valor de ${codeToUpperCase} é ${valores[codeToUpperCase]}`);
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
                value={code}
                onChangeText={setCode}
                maxLength={4}/>

            <TouchableOpacity style={styles.button} onPress={handleSearch}>
                <Text style={styles.buttonText}>Gerar</Text>
            </TouchableOpacity>


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
    }
});
