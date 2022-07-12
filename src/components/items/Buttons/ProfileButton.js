import React, { Component } from 'react';
import { View , StyleSheet , Text , TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class  extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
        <TouchableOpacity>
            <View style={styles.component}>
                <Icon name={this.props.iconName} size={36} color={'#9f9f9f'} style={{marginHorizontal:5}}/>
                <View style={styles.titleGroup}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <View style={styles.seperator}></View>
                </View>
            </View>
        </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
    component:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        marginVertical:5
    },
    titleGroup:{
        width:'85%',
        justifyContent:'space-around'
    },
    title:{
        fontSize:18,
        fontWeight:'500',
        color:'black'
    },
    seperator:{
        height:2,
        width:'100%',
        backgroundColor:'#9f9f9f'
    }
});
