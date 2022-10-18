import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default function Balance ({saldo, gasto}) {
 
    return (
      <View style={styles.container}>

        <View style={styles.item}>
            <Text style={styles.titulo}>Saldo</Text>
            <View style={styles.content}>
                <Text style={styles.modeda}>R$</Text>
                <Text style={styles.saldo}>{saldo}</Text>
            </View>
        </View>
        <View style={styles.item}>
            <Text style={styles.titulo}>Gastos</Text>
            <View style={styles.content}>
                <Text style={styles.modeda}>R$</Text>
                <Text style={styles.gastos}>{gasto}</Text>
            </View>
        </View>

      </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFF',
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingStart: 20,
        paddingEnd:20,
        marginTop: -30,
        marginStart:15,
        marginEnd:15,
        borderRadius: 10,
        paddingVertical:25,
        zIndex: 99,
    },
    content:{
      flexDirection:'row',
      alignItems:'center',

    },
    item:{

    },
    titulo:{
      fontSize:20,
      color:'#999',
    },
    modeda:{
      color:'#999',
      marginRight: 4,

    },
    saldo:{
      fontSize:20,
      color: '#00CD00',
    },
    gastos:{
      fontSize:20,
      color: '#FF0000',
    },

})