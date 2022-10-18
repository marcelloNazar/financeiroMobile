import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

export default function Action() {
  return (
    <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <AntDesign name='addfolder' size={25} color='#000'/>
            </View>
            <Text style={styles.buttonLabel}>Entradas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <AntDesign name='tagso' size={25} color='#000'/>
            </View>
            <Text style={styles.buttonLabel}>Compras</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <AntDesign name='creditcard' size={25} color='#000'/>
            </View>
            <Text style={styles.buttonLabel}>Carteira</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <AntDesign name='barcode' size={25} color='#000'/>
            </View>
            <Text style={styles.buttonLabel}>Contas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <AntDesign name='setting' size={25} color='#000'/>
            </View>
            <Text style={styles.buttonLabel}>Conta</Text>
        </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        maxHeight:84,
        marginBottom:15,
        marginTop:18,
        paddingEnd:15,
        paddingStart:15,

    },
    areaButton:{
        backgroundColor:'#FFF',
        height: 60,
        width:60,
        borderRadius:30,
        justifyContent: 'center',
        alignItems:'center'
    },
    actionButton:{
        alignItems:'center',
        marginRight:35,
        
    },
    buttonLabel:{
        marginTop:5,
        textAlign:'center',
        fontWeight: 'bold'
    }
})