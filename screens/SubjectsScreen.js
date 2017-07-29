import React from 'react';
import { ScrollView, StyleSheet, Button } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class SubjectsScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Select Subject',
    },
  };

  _handlePhysicsPress = () => {
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

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
});
