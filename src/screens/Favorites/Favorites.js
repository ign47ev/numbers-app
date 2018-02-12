import React from 'react';
import { Text } from 'react-native';
import Screen from '../../components/Screen/Screen';

class Favorites extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <Screen navigation={navigation}>
        <Text>Favorites</Text>
      </Screen>
    );
  }
}

export default Favorites;
