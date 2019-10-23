import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import Home from '../components/Home'
import OneFilmScreen from '../components/OneFilmScreen'
import WatchFilmScreen from '../components/WatchFilmScreen'
import StartFilmScreen from '../components/StartFilmScreen'

const NavigationFilms = createStackNavigator({
    AllFilms:Home,
    OneFilm:OneFilmScreen,
    WatchFilm:WatchFilmScreen,
    StartFilm:StartFilmScreen
})


export default createAppContainer(NavigationFilms)