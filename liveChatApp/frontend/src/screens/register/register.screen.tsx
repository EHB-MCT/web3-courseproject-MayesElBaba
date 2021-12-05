import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Appbar, Button, TextInput } from "react-native-paper";
import { StyleSheet } from "react-native";
import { theme } from "../../../App.style";
import { HeaderComponent } from "../../components/header/header.component";


interface RegisterScreenProps{
    navigation:any;
}

export const RegisterScreen = (props:RegisterScreenProps) =>{
    
const register =()=>props.navigation.navigate("Home");

    return(
        <SafeAreaView>
            <ScrollView>
                <HeaderComponent title="Register"/>
                <View style={registerStyle.content} >
                <TextInput label="Name" />
                <TextInput label="Email" keyboardType="email-address"/>
                <TextInput  label="Password" secureTextEntry={true} right={ <TextInput.Icon name="eye-off-outline" color={registerStyle.icon.color} />}/>
                <TextInput  label="Confirm Password" secureTextEntry={true}  right={ <TextInput.Icon name="eye-off-outline" color={registerStyle.icon.color} />} />
                <Button
                onPress={register}
                 mode="contained" style={registerStyle.button}> Register </Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    );

}

 const registerStyle = StyleSheet.create({

    content:{
        padding: 15,
        paddingTop:0
    },
  icon:{
      color:theme.colors.primary
  },
  button:{
      margin:15,
      marginLeft:0,
      marginRight:0
  }
});