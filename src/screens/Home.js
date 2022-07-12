import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import ListItem from "../components/items/ListItem";
import data from '../assets/data/Products'

const Home = () => {
    const renderItem = ({item}) => {
        return(
            <View>
                <View style={{width:40,height:1}}></View>
                <ListItem name={item.name} iconName={item.iconName} price={item.price}/>
            </View>
        );
    }

    return (
        <View style={styles.page}>
            <FlatList
                style={styles.list}
                data={data}
                keyExtractor={item => item.name}
                renderItem={renderItem}/>
        </View>
    );
};
const styles = StyleSheet.create({
    page:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    list:{
        width:'100%',
    }
});

export default Home;
