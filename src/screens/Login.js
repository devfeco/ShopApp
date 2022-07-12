import React from 'react';
import {Text , View , StyleSheet , KeyboardAvoidingView} from 'react-native';
import CustomButton from "../components/items/Buttons/CustomButton";
import Input from "../components/items/Input";
import {useNavigation} from "@react-navigation/native";
const Login = () => {
    const navigation = useNavigation();
    const login = () => {
        navigation.navigate('BottomNavigation');
    }
    return (
        <View style={styles.page}>
            <Text style={styles.title}>ONLINE FURNITURE STORE</Text>
            <KeyboardAvoidingView style={styles.inputGroup}>
                <Input placeholder={"(000) 000-00-00"} keyboardType={"phone-pad"}/>
                <Input placeholder={"Password"} secureTextEntry={true}/>
            </KeyboardAvoidingView>
            <View style={styles.button}>
                <CustomButton title={"Login"} titleColor={'#ececec'} buttonColor={'#FA5B3E'} onPress={login}/>
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerTitle}>Forgot your password?</Text>
            </View>
        </View>
    );
};

export default Login;
const styles = StyleSheet.create({
    page:{
        flex:1,
        justifyContent:'center',
        width:'100%',
        backgroundColor:'white'
    },
    title:{
        color:'#592A5C',
        fontSize:36,
        textAlign:'center',
        flex:2,
        fontWeight:'bold',
        paddingTop:50,
    },
    inputGroup:{
        justifyContent:'flex-end',
        flex:4
    },
    button:{
        justifyContent:'center',
        alignItems:'center',
        marginVertical:10,
        flex:3
    },
    footer:{
        justifyContent:'center',
        alignItems:'center',
        marginVertical:10,
        flex:2
    },
    footerTitle:{
        color:'#592A5C',
        fontSize:16
    }
});
