import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App(){
  return (  
    <View style={styles.container}>
       <Text style={styles.text}>Ola mundo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#f4d3f4',
    justifyContent: 'center',                  //alinha verticalmente      
    alignItems: 'center',                     //alinha horizontalmente
  },
  text: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 20,
  },

});

