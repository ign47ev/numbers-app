import React from 'react'
import { View, Text } from 'react-native';
import Icon from '../Icon/Icon';
import styles from './NavBarStyles';

class NavBar extends React.Component {

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.left}>
          <Icon
            source={require('../../../assets/images/icons8-back-100.png')}
            size={25}
            wrapperSize={50}
            tintColor="#ff1744"
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={styles.center}>
          <Text style={styles.title}>
            {
              navigation.state.params && navigation.state.params.title
                ? navigation.state.params.title
                : navigation.state.routeName
            }
          </Text>
        </View>
        <View style={styles.right}>
          <Icon
            source={require('../../../assets/images/icons8-plus-100.png')}
            size={25}
            wrapperSize={50}
            tintColor="#ff1744"
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
    );
  }
}

export default NavBar;
