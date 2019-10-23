import React, { Component } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet,Image ,TouchableOpacity } from "react-native";


class SignInScreen extends Component {

    state = {
        email: '',
        password: ''
    }

    goToHomePage = () => {
        this.props.navigation.navigate({
            routeName: 'AllFilms'
        })
    }

    LogIn = () => {
        fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyATooiigA2Ye7Tc7c3pHz0l55zkOkBY5kw", {
            method: 'POST',
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                returnSecureToken: true
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
            .then(parsedRes => {
                if (parsedRes.email == this.state.email) {
                    this.goToHomePage()
                } else {
                    Alert.alert("Check your Email or Password")
                }
            })
            .catch(err => {
                console.log(err)
                alert("Authuntication faild please try again")
            })
    }


    render() {
        return (
            <View style={styles.container}>


                <TextInput
                    style={styles.input}
                    placeholder=' Enter Your Email'
                    autoCapitalize="none"
                    placeholderTextColor='#42A5F5'
                    onChangeText={val => this.setState({ email: val })}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Enter Your Password'
                    secureTextEntry={true}
                    autoCapitalize="none"
                    placeholderTextColor='#42A5F5'
                    onChangeText={val => this.setState({ password: val })}
                />
                <Button
                    title='LogIn'
                    onPress={this.LogIn}
                    color="#42A5F5"
                />
            </View>
        )
    }
}

export default SignInScreen


const styles = StyleSheet.create({
    input: {
        width: 350,
        height: 55,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#42A5F5',
        margin: 10,
        padding: 8,
        color: '#42A5F5',
        borderRadius: 14,
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        

    }
})