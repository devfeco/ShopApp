import React from 'react';
import {Text , View , Image , StyleSheet} from 'react-native';
import ProfileButton from "../components/items/Buttons/ProfileButton";
import Icon from 'react-native-vector-icons/Ionicons'

const Profile = () => {
    return (
        <View style={styles.page}>
            <View style={styles.avatarGroup}>
                <Image source={require('../assets/images/avatar.jpg')} style={styles.avatar}/>
                <Text style={styles.name}>Feyzullah Ardahan</Text>
                <View style={styles.cityGroup}>
                    <Icon name={"location"} size={24} color={"red"}/>
                    <Text style={styles.city}>City</Text>
                </View>
            </View>
            <View style={styles.buttonGroup}>
                <ProfileButton title={"Messages"} iconName={"email"}/>
                <ProfileButton title={"Notification"} iconName={"bell"}/>
                <ProfileButton title={"Account Details"} iconName={"information"}/>
                <ProfileButton title={"My Purchases"} iconName={"cart"}/>
                <ProfileButton title={"Settings"} iconName={"account-settings"}/>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    page:{
        flex:1,
        backgroundColor:'#f8f8f8'
    },
    avatarGroup:{
        flex:4,
        justifyContent:'center',
        alignItems:'center'
    },
    avatar:{
        height:150,
        width:150,
        borderRadius:500
    },
    name:{
        color:'black',
        fontWeight:'bold',
        fontSize:24
    },
    cityGroup:{
        flexDirection:'row',
    },
    city:{
        fontSize:18,
        fontWeight:'500'
    },
    buttonGroup:{
        flex:4
    }
});

export default Profile;
