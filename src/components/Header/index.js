import React from "react";
import {
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity,
} from 'react-native'
import {Feather} from '@expo/vector-icons'

const statusBarHeigth = StatusBar.currentHeight ? StatusBar.currentHeight  : 40;


export default function Header ({name}){
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.username}>{name}</Text>
                <TouchableOpacity activeOpacity={0.8} style={styles.button}>
                    <Feather name="user" size={25} color="#FFF" />
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#8000FF',
        paddingTop: statusBarHeigth,
        flexDirection: "row",
        paddingStart: 15,
        paddingEnd:15,
        paddingBottom: 70,
    },
    content:{
        flex:1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    username:{
        fontSize: 22,
        color: '#FFF',
        fontWeight:'bold',

    },
    button:{
        width: 40,
        height: 40,
        backgroundColor: 'rgba(255,255,255, 0.2)',
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 20,

    }
})