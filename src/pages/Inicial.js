import React, { useState } from 'react';
import { KeyboardAvoidingView, View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Platform } from 'react-native';

import logo from '../assets/logo.png';

export default function Inicial(){

    const [code, setCode] = useState('');
    const [code1, setCode1] = useState('');
    const [correspondencia, setCorrespondencia] = useState(null)

    function handleSearch(){
        const codeToUpperCase = code.toUpperCase();
        console.log(`Veio da  app: ${codeToUpperCase}`);

        const valores = { A100: '0070',
        A101: '0041',
        A102: '0012',
        A103: '0082'};

        if (valores[codeToUpperCase] !== undefined){
            console.log(`o valor de ${codeToUpperCase} é ${valores[codeToUpperCase]}`);
            setCode1(valores[codeToUpperCase]);
        }
        else {
            console.log('valor nao encontrado ou inválido');
        }

        setCorrespondencia(true)
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


            { correspondencia && (

                <View style={styles.matchContainer}>

                    <Text style={styles.matchName}>{code1}</Text>
                    <Text style={styles.matchBio}>adeusss</Text>

                    <TouchableOpacity>  
                        <Text style={styles.closeMatch}>FECHAR</Text>
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
    matchName:{
        fontSize: 26,
        fontWeight: 'bold',
        color: '#FFF',
    },

    matchContainer: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    matchBio:{
        marginTop:10,
        fontSize: 16,
        color: 'rgba(255,255,255,0.8)',
        lineHeight: 24,
        textAlign: 'center',
        paddingHorizontal: 30,
    },

    closeMatch:{
        fontSize:16,
        color: 'rgba(255,255,255,0.8)',
        textAlign: 'center',
        marginTop: 30,
        fontWeight: 'bold'
    },

});
