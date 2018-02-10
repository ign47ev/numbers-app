import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './TabBarStyles';

class TabBar extends React.Component {

  handleNavigate = routeName => {
    const { navigation } = this.props;
    if (navigation.state.routeName !== routeName) {
      navigation.navigate(routeName)
    }
  };

  render() {
    const { routeName } = this.props.navigation.state;

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.tab} onPress={() => this.handleNavigate('Home')}>
          <Image
            source={require('../../assets/images/icons8-home-100.png')}
            fadeDuration={0}
            style={{ width: 25, height: 25, tintColor: routeName === 'Home' ? '#6a51ae' : '#aaa' }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => this.handleNavigate('Settings')}>
          <Image
            source={require('../../assets/images/icons8-user-male-100.png')}
            fadeDuration={0}
            style={{ width: 25, height: 25, tintColor: routeName === 'Settings' ? '#6a51ae' : '#aaa' }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default TabBar;
