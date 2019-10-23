import React, { Component } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native'
import { PricingCard } from 'react-native-elements';

export default class WatchFilmScreen extends Component {

    startMovie=()=>{
        this.props.navigation.navigate({routeName:'StartFilm'})
    }


    render() {
        return (
            <View style={styles.screen}>
                <PricingCard
                    color="#4f9deb"
                    title="Starter"
                    price={this.props.navigation.getParam('totalPrice')}
                    info={['1 User', 'Basic Support', 'All Core Features']}
                    button={{ title: 'GET STARTED', icon: 'flight-takeoff'}}
                    onButtonPress={this.startMovie}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        textAlign:'center',
        justifyContent:'center'
    }
})