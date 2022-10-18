import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Action from '../../components/Action';

const list =[
    {
        id:1,
        label: 'Boleto',
        value: '522,00',
        date: '02/02/2022',
        type: true
    },
    {
        id:2,
        label: 'recebeu',
        value: '7.777,00',
        date: '02/02/2022',
        type: false
    },
    {
        id:3,
        label: 'conta',
        value: '42,00',
        date: '02/02/2022',
        type: false
    }
]

export default function Home() {
  return (
    <View style={styles.container}>
     
        <Header name={'Marcello Nazar'} />
        <Balance saldo={"200.000,00"} gasto={'10.000,00'} />
        <Action/>
        <Text style={styles.title}>Últimas movimentações</Text>
        <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item)=> String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item})=> <Movements data={item}/>}
        />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE',
    
  },
  title:{
    fontSize: 20,
    fontWeight:'bold',
    margin: 14,
  },
  list:{
    marginHorizontal:14,

  }
});
