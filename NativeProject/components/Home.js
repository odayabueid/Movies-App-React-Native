import React, { Component } from 'react';
import { View, Text, Button, Image, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import MapView from 'react-native-maps';


class Home extends Component {

    state = {
        films: [
            { id: 1, price: '$19', title: "breakingBad", desc: "Mild-mannered high school chemistry teacher Walter White thinks his life can't get much worse. His salary barely makes ends meet", url: "https://revengeofthefans.com/wp-content/uploads/2019/01/Breaking-Bad-RTF-e1548338096892.jpg" },
            { id: 2, price: '$22', title: "gameOfThrones", desc: "t's the depiction of two powerful families -- kings and queens, knights and renegades, liars and honest men -- playing ", url: "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/episodes/1/game-of-thrones-1-1920x1080.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg" },
            { id: 3, price: '$13', title: "LordOfTheRing", desc: "whose shooting locations include Northern Ireland, Malta, Croatia and Spain.", url: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg" },
            { id: 4, price: '$11', title: "walkingDead", desc: " earn as much money as he can in the time he has left by turning an old RV into a meth lab on wheels", url: "https://www.indiewire.com/wp-content/uploads/2019/07/The-Walking-Dead.png?w=780" },
            { id: 5, price: '$15', title: "toystory", desc: "The future of civilization rests in the fate of the One Ring, which has been lost for centuries. Powerful forces are unrelenting in their search for it", url: "http://t0.gstatic.com/images?q=tbn:ANd9GcRKk8fPFSi83NmjO4hlth9VpXsqigxNXrG10hXum8ljJ_fZ07c1" },
            { id: 6, price: '$8', title: "Avatar", desc: "But fate has placed it in the hands of a young Hobbit named Frodo Baggins (Elijah Wood), who inherits the Ring and steps into legend", url: "https://www.proximus.be/dam/jcr:fe46db9e-d5ae-4943-9fb6-89a25744047a/cdn/sites/iportal/images/blogs/articles/res/Gift-films-FR-EN-blog~2018-06-07-15-56-47~cache.jpg" },
            { id: 7, price: '$9', title: "HarryPotter", desc: "A daunting task lies ahead for Frodo when he becomes the Ringbearer - to destroy the One Ring in the fires of Mount Doom where it was forged.", url: "https://timedotcom.files.wordpress.com/2014/07/301386_full1.jpg" },
            { id: 8, price: '$2', title: "Inside Out", desc: "Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks ", url: "https://www.sunrisemedical.eu/getattachment/22837499-8d3e-4ebc-996d-abb9cb72d8f4/inside-out-films-about-disability.jpg" },
            { id: 9, price: '$3', title: "X-Men", desc: "the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him. Isolated, bullied and ", url: "https://www.sunrisemedical.eu/getattachment/cd0dc57a-cc2b-4434-a603-8a98ee7ee4af/x-men-the-last-stand-films-about-disability.jpg" },
            { id: 10, price: '$40', title: "JOKER", desc: "bullied and disregarded by society, Fleck begins a slow descent into madness as he transforms into the criminal mastermind known as the Joker.", url: "https://specials-images.forbesimg.com/imageserve/5d69fa8f673aa300083ca414/960x0.jpg?fit=scale" },
            { id: 11, price: '$24', title: "Lion King", desc: "Somewhere, there are future Hollywood directors who will tell magazine feature writers that they first decided to make movies as they watched this film; it's that good", url: "http://t1.gstatic.com/images?q=tbn:ANd9GcRuhgBlPlz9H3Y8hIyOVL0hMALI-t512zwqZZRdMJ4lw9q_NfMx" },
            { id: 12, price: '$0', title: "Spider Man", desc: "Woody (Tom Hanks), a good-hearted cowboy doll who belongs to a young boy named Andy (John Morris), sees his position as Andy's favorite toy jeopardized when his parents buy him a Buzz Lightyear (Tim Allen) action figure.", url: "http://t0.gstatic.com/images?q=tbn:ANd9GcRPzzfxN6Ugvq902Ut7A-QkCDOqLzzbiYQ2bPk2pn5D9fBZBrT_" },
            { id: 13, price: '$33', title: "Star Wars", desc: ". Even worse, the arrogant Buzz thinks he's a real spaceman on a mission to return to his home planet. When Andy's family moves to a new house", url: "http://t3.gstatic.com/images?q=tbn:ANd9GcR7Ct87Uws_Rfxjd4QbmFW99gwu7rAzEREgmA3k2lC67WwnOgEn" },
            { id: 14, price: '$7', title: "John Wick", desc: "What is a toy's greatest fear? That a newer toy may become the object of a child's affection, thus condemning the one-time favorite to a lonely shelf or a darkened closet", url: "http://t3.gstatic.com/images?q=tbn:ANd9GcTaABFJr_eVRUhtaPnKfihePqqNsJjcGvZ62OgxCv6wjXn-XgGC" },

        ],
        text: ''
    }

    selectFilm = (item) => {
        this.props.navigation.navigate({
            routeName: 'OneFilm', params: {
                title: item.title,
                imgUrl: item.url,
                description: item.desc,
                price:item.price
            }
        })
    }

    render() {
        return (
            <View>
                <View style={{ alignSelf: 'center', height: 40, marginTop: 35, borderWidth: 1, borderColor: "black", width: '70%', justifyContent: 'center', alignItems: 'center' }}>
                    <TextInput placeholder="Search for film" onChangeText={(text) => { this.setState({ text }) }} />
                </View>
                <ScrollView>
                    <View style={styles.container}>
                        {/* <Button title="increment the counter" onPress={this.props.incAction} /> */}
                        {/* <Text>{this.props.counter}</Text> */}
                        {/* <TextInput style={{height:40,borderBottomColor:"black",paddingTop:40,borderWidth:5,borderColor:"black"}}/> */}
                        {this.state.films.map((item => {
                            return (
                                <View key={item.id} style={styles.ViewImg} onPress={this.selectFilm}>
                                    <TouchableOpacity onPress={() => this.selectFilm(item)}>
                                        <Image style={{ height: 140, width: 100, resizeMode: "stretch" }} source={{ uri: item.url }} />
                                    </TouchableOpacity>
                                    <Text style={{ fontSize: 10, flex: 1, justifyContent: 'center', alignItems: "center", paddingLeft: '5%' }}>{item.title}</Text>
                                </View>

                            )
                        }))}
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        marginVertical: 15,
        // justifyContent: 'space-between',
        flexWrap: 'wrap'
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    ViewImg: {
        // flex:1,
        // flexDirection:'row',
        // flexWrap:'wrap',
        // justifyContent:"space-between"
        alignSelf: 'center',
        height: 150,
        margin: 1,
        paddingLeft: "4%"

    }
});


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

export default connect(mapStateToProps, mapDispatchToProps)(Home);