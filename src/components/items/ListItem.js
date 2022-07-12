import React, { Component } from 'react';
import { View , StyleSheet , Text , TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import PieceButton from './Buttons/PieceButton'

export default class  extends Component {
  constructor(props) {
    super(props);
    this.state={
        discountedPrice:parseInt(this.props.price)-(parseInt(this.props.price)/10),
    }
    this.piece=1;
  }
  render() {
    return (
        <View style={styles.component}>
          <View style={styles.icon}>
            <Icon name={this.props.iconName} size={100} color={'#f5bc42'}/>
          </View>
          <View style={styles.infoGroup}>
            <Text style={styles.name}>{this.props.name}</Text>
            <View style={styles.pieceGroup}>
                <PieceButton title={"-"} customStyle={{borderBottomLeftRadius:5,borderTopLeftRadius:5}} onPress={() => {
                    if (this.piece > 1)
                        this.piece--;
                }}/>
                <Text style={styles.piece}>{this.piece}</Text>
                <PieceButton title={"+"} customStyle={{borderBottomRightRadius:5,borderTopRightRadius:5}} onPress={() => {
                    this.piece++;
                }}/>
            </View>
          </View>
          <View style={styles.priceGroup}>
            <Text style={styles.price}>{'$'+this.props.price}</Text>
            <Text style={styles.discountedPrice}>{'$'+this.state.discountedPrice}</Text>
          </View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
    component:{
        flexDirection:'row',
        backgroundColor:'white',
        width:'100%',
        justifyContent:'space-around',
        alignItems:'center',
        borderRadius:10,
        elevation:10,
        marginVertical:10
    },
    name:{
        fontSize:24,
        fontWeight:'bold',
        marginBottom:10,
    },
    pieceGroup:{
        flexDirection:'row',
    },
    piece:{
        height:30,
        width:30,
        textAlign:'center',
        fontSize:22,
        borderWidth:.5
    },
    price:{
        color:'lightgrey',
        textDecorationLine:'line-through',
        fontSize:24,
        textAlign:'right'
    },
    discountedPrice:{
        color:'#592A5C',
        fontSize:32
    }
});
