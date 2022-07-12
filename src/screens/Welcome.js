import React from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native';
import CustomButton from "../components/items/Buttons/CustomButton";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {useNavigation} from "@react-navigation/native";

const Welcome = () => {
    const navigation = useNavigation();

    const goToLogin = () => {
        navigation.navigate("Login");
    }
    const goToSignIn = () => {
        navigation.navigate("SignUp");
    }
    return (
        <View style={styles.page}>
            <Image source={require("../assets/images/bg.png")} style={styles.background}/>
            <Text style={styles.title}>ONLINE FURNITURE STORE</Text>
            <Icon name={"sofa-outline"} size={224} color={'white'} style={styles.icon}/>
            <CustomButton
                style={styles.button}
                title={"GET STARTED"}
                titleColor={"#592A5C"}
                buttonColor={"#FFFEFF"}
                onPress={goToLogin}/>
            <View style={styles.footer}>
                <Text style={{color:'#FFFEFF',fontSize:18,fontWeight:'500'}}>Don't have an account?</Text>
                <TouchableOpacity style={{width:'60%'}} onPress={goToSignIn}>
                    <View style={styles.signIn}>
                        <Text style={styles.signInTitle}>Sign in here</Text>
                        <View style={styles.seperator}></View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    page:{
        justifyContent:'space-around',
        alignItems:'center',
        flex:1
    },
    background:{
        top:0,
        left:0,
        position:'absolute',
        width:'100%',
        height:'100%',
    },
    title:{
        color:'white',
        fontSize:36,
        textAlign:'center',
        flex:2,
        fontWeight:'bold',
        paddingTop:50,
    },
    icon:{
        flex:5,
    },
    footer:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        marginTop:25
    },
    signIn:{
        height:50,
        justifyContent:'center',
        alignItems:'center',
    },
    signInTitle:{
        color:'white',
        fontWeight:'bold',
        fontSize:30
    },
    seperator:{
        height:2,
        width:'60%',
        backgroundColor:'#FFFEFF',
        marginTop:1,
        borderRadius:10
    }
});

export default Welcome;
