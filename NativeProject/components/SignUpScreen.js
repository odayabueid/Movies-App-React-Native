import React, { Component } from 'react';
import { View, Text, Button, Image, StyleSheet, TextInput, Alert, ScrollView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import MapView from 'react-native-maps';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class SignUpScreen extends Component {

    state = {
        email: '',
        password: '',
    }
    goToLoginPage = () => {
        this.props.navigation.navigate({
            routeName: 'SignIn'
        })
    }

    signUp = () => {
        if (this.state.email.trim() !== "" && this.state.password.trim() !== "") {
            fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyATooiigA2Ye7Tc7c3pHz0l55zkOkBY5kw", {
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
                .then(res => {
                    if (res.error.message === "EMAIL_EXISTS") {
                        Alert.alert("this email is Alredy exist")
                    } else {
                        console.log(res)
                        this.goToLoginPage()
                    }

                })
                .catch(err => {
                    console.log(err)
                    alert("Authuntication faild please try again")
                })
        } else {
            Alert.alert(
                'Check your Email or Password'
            )
        }
    }

    render() {
        return (

            <View style={styles.container}>

                <Image style={{height:100,width:200 ,marginBottom:30}} source={require('../assets/signup.png')}/>

                <TextInput
                    style={styles.input}
                    placeholder='Enter Valid Email'
                    autoCapitalize="none"
                    placeholderTextColor='#42A5F5'
                    onChangeText={val => this.setState({ email: val })}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Enter Strong Password'
                    secureTextEntry={true}
                    autoCapitalize="none"
                    placeholderTextColor='#42A5F5'
                    onChangeText={val => this.setState({ password: val })}
                />
                <Button
                    title='Sign Up'
                    onPress={this.signUp}
                    color="#42A5F5"
                />
                <TouchableOpacity onPress={this.goToLoginPage}>
                    <Text style={{ color: '#42A5F5',marginTop:40 }}>you have An Account ? Please Login</Text>
                </TouchableOpacity>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    input: {
        width: 350,
        height: 55,
        backgroundColor: '#fff',
        borderWidth:1,
        borderColor:'#42A5F5',
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
        // justifyContent: 'center',
        paddingTop:30,
        alignItems: 'center'
    }
})



const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        incAction: () => {
            return dispatch({
                type: "INCREM"
            })
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);




