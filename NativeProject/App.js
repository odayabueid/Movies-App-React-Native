import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { createStore } from 'redux'
import reducer from './ReduxStore/reducer.js'
import { Provider } from 'react-redux'
import Home from './components/Home.js'
import NavigationFilms from './navigation/NavigationFilms'
const store = createStore(reducer)

export default function App() {
  return (
    <Provider store={store}>
        <NavigationFilms />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

