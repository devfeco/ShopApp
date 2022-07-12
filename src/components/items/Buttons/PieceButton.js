import React, { Component } from 'react';
import {TouchableOpacity, View , Text , StyleSheet} from 'react-native';

export default class  extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
        <TouchableOpacity onPress={this.props.onPress}>
            <View style={[styles.button,this.props.customStyle]}>
                <Text style={styles.title}>{this.props.title}</Text>
            </View>
        </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
    button:{
        height:30,
        width:30,
        borderWidth:1,
        borderColor:'black',
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
    }
});
