import React, { Component } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

 class OneFilmScreen extends Component {

watchFilm=()=>{
    this.props.navigation.navigate({ routeName: 'WatchFilm' ,params:{
        totalPrice:this.props.navigation.getParam('price')
    }})
}

    render() {
        var imageUrl = this.props.navigation.getParam('imgUrl')
        return (
            <View style={styles.Film}>
                <Card
                    title={this.props.navigation.getParam('title')}>
                    <Image  source={{ uri: imageUrl}} style={{ height: "50%",resizeMode:"stretch", width: "100%" }}/>
                    <Text style={{ marginBottom: 30,marginTop:30}}>
                        {this.props.navigation.getParam('description')}
                    </Text>
                    <Button
                        icon={<Icon name='code' color='#ffffff' />}
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title='Watch Now'  onPress={this.watchFilm}/>
                </Card>
            </View>
        )
    }
}
export default OneFilmScreen

const styles = StyleSheet.create({
    Film: {
        height:"100%"
    },
    singleFilm: {
        // flex: 1,
        alignSelf: 'center'
    },
    imgStyle: {
        marginTop: 30,
    }
})



{/* <View style={styles.singleFilm}>
<Text style={{ fontSize: 33 }}>{this.props.navigation.getParam('title')}</Text>
</View>
<View style={styles.imgStyle}>
<Image source={{ uri: imageUrl }} style={{alignSelf:'center', height: "80%",resizeMode:"stretch", width: "60%" }} />
</View> */}