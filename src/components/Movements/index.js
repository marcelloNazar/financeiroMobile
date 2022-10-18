import { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Movements ({data}) {
    const [showValue, setShowValue]= useState(false)
    const valor = data.type ? `R$ ${data.value}` : `R$ -${data.value}`

  return (
    <TouchableOpacity style={styles.container} onPress={()=> setShowValue(!showValue)}>
        <Text style={styles.date}>{data.date}</Text>
        <View style={styles.content}>
            <Text style={styles.label}>{data.label}</Text>
            
            {showValue? (
                <Text style={data.type ? styles.value : styles.despesas}>{valor}</Text>
            ):(
                <View style={styles.skeleton}>

                </View>
            )}

        </View>
    </TouchableOpacity>
      
    
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginBottom:20,
        borderBottomWidth: 0.2,
        borderBottomColor: "#AAA"
    },
    date:{
        color: '#AAA',
        fontWeight: 'bold',
    },
    content:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 3,
        marginBottom:7,

    },
    label:{
        fontWeight:'bold',
        fontSize:17,
    },
    value:{
        fontSize:17,
        fontWeight: 'bold',
        color: '#00CD00'
    },
    despesas:{
        fontSize:17,
        fontWeight: 'bold',
        color: '#FF0000'
    },
    skeleton:{
        marginTop:6,
        width: 50,
        height: 10,
        backgroundColor:'#AAA',
        borderRadius:10
    }
})