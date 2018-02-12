import React from 'react';
import { Text } from 'react-native';
import Screen from '../../components/Screen/Screen';

class Cart extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <Screen navigation={navigation}>
        <Text>Cart</Text>
      </Screen>
    );
  }
}

export default Cart;
