import React, { Component } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native'
import { Tile } from 'react-native-elements';

export default class StartFilmScreen extends Component {

    render() {
        return (
            <View>
                <Tile
                    imageSrc={require('../assets/netflixWhite.png')}
                    icon={{ name: 'play-circle', type: 'font-awesome' }}
                    featured
                />
            </View>
        )
    }
}