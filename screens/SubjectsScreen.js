import React from 'react';
import { ScrollView, StyleSheet, Button } from 'react-native';
import Expo from 'expo';
import {createRouter, NavigationProvider, StackNavigation} from '@expo/ex-navigation';
import { ExpoLinksView } from '@expo/samples';
import {HomeScreen} from '../screens/HomeScreen';

const Router = createRouter(() => ({
  home: () => HomeScreen,
}));

export default class SubjectsScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Select Subject',
    },
  };

  _handlePhysicsPress = () => {
    this.props.navigator.push(Router.getRoute('home'));
    return;
  };

  _handleChemistryPress = () => {
    return;
  };

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={this.props.route.getContentContainerStyle()}>

        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <Button
        title = 'Physics'
        onPress = {this._handlePhysicsPress}
         />

         <Button
         title = 'Chemistry'
         onPress = {this._handleChemistryPress}
          />

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    marginTop: 15,
    paddingVertical: 15,
  },
});
