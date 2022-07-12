import React, { Component } from 'react';

import { View , TextInput , StyleSheet} from 'react-native';
export default class  extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
        <View style={styles.component}>
            <TextInput style={styles.input} {...this.props} placeholderTextColor={'lightgrey'}/>
        </View>
    );
  }
}
const styles = StyleSheet.create({
    component:{
        justifyContent:'center',
        alignItems:'center'
    },
    input:{
        width:'90%',
        height:80,
        fontSize:36,
        color:'lightgrey',
        borderBottomColor:'lightgrey',
        borderBottomWidth:2,
        marginVertical:10
    },
});
