 import React from "react";
import { SafeAreaView, View , Alert} from "react-native";
import { Button, Card, TextInput } from "react-native-paper";
import { loginStyle } from "./login.style";


interface LoginScreenProps{
    navigation:any;
}

/// Van login tot home screen NAV
 export const LoginScreen=( props:LoginScreenProps)=>{
     const login = () =>props.navigation.navigate("Home");
     const register =()=>props.navigation.navigate("Register");

    return(
        <SafeAreaView style={loginStyle.content}>
            <View style={loginStyle.view}>
            <Card>
                <Card.Title title="Live Chat" titleStyle={loginStyle.cardTitle}></Card.Title>
                <Card.Content>
                    <TextInput label="Email" keyboardType="email-address"></TextInput>
                    <TextInput label="Password" secureTextEntry={true}></TextInput>
                    <Button style={loginStyle.cardButton}>Forgot Email/Password</Button>
                    <Button 
                    onPress={login}
                    mode="contained"
                     style={loginStyle.cardButton}>
                         Login</Button>
                    <Button
                    onPress={register}
                     style={loginStyle.cardButton}>Register</Button>

                </Card.Content>
            </Card>
            </View>
        </SafeAreaView>
    );

 }