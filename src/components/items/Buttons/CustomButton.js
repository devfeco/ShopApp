import React, { Component } from 'react';
import { View , StyleSheet , TouchableOpacity , Text} from 'react-native';
export default class  extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }
  render() {
    return (
        <View style={[styles.component,{backgroundColor:this.props.buttonColor}]}>
            <TouchableOpacity onPress={this.props.onPress}>
                <Text style={[styles.title,{color:this.props.titleColor}]}>{this.props.title}</Text>
            </TouchableOpacity>
        </View>
    );
  }
}
const styles = StyleSheet.create({
    component:{
        justifyContent:"center",
        alignItems:'center',
        backgroundColor:'red',
        width:'60%',
        height:60,
        borderRadius:100,
    },
    title:{
        fontWeight:'bold',
        fontSize:24
    }
});
