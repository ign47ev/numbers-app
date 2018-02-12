import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native';
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
        <TouchableOpacity
          style={styles.tab}
          activeOpacity={1}
          onPress={() => this.handleNavigate('Store')}
        >
          <Image
            source={require('../../../assets/images/icons8-shop-100.png')}
            fadeDuration={0}
            style={[
              styles.tabIcon,
              { tintColor: routeName === 'Store' ? '#ff1744' : '#ccc' }
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          activeOpacity={1}
          onPress={() => this.handleNavigate('Favorites')}
        >
          <Image
            source={require('../../../assets/images/icons8-heart-100.png')}
            fadeDuration={0}
            style={[
              styles.tabIcon,
              { tintColor: routeName === 'Favorites' ? '#ff1744' : '#ccc' }
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          activeOpacity={1}
          onPress={() => this.handleNavigate('Cart')}
        >
          <Image
            source={require('../../../assets/images/icons8-shopping-cart-100.png')}
            fadeDuration={0}
            style={[
              styles.tabIcon,
              { tintColor: routeName === 'Cart' ? '#ff1744' : '#ccc' }
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          activeOpacity={1}
          onPress={() => this.handleNavigate('Profile')}
        >
          <Image
            source={require('../../../assets/images/icons8-user-male-100.png')}
            fadeDuration={0}
            style={[
              styles.tabIcon,
              { tintColor: routeName === 'Profile' ? '#ff1744' : '#ccc' }
            ]}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default TabBar;
