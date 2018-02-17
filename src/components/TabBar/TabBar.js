import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Images, Colors } from '@themes';
import styles from './TabBarStyles';

class TabBar extends React.Component {

  static propTypes = {
    navigation: PropTypes.shape(),
    overContent: PropTypes.bool,
    style: PropTypes.shape(),
  };

  static defaultProps = {
    overContent: false,
    style: null,
  };

  handleNavigate = routeName => {
    const { navigation } = this.props;
    if (navigation.state.routeName !== routeName) {
      navigation.navigate(routeName)
    }
  };

  render() {
    const { navigation, overContent, style } = this.props;
    const { routeName } = navigation.state;

    return (
      <View style={[styles.container, overContent ? styles.containerAbsolute : null, style]}>
        <TouchableOpacity
          style={styles.tab}
          activeOpacity={1}
          onPress={() => this.handleNavigate('Store')}
        >
          <Image
            source={Images.shop}
            fadeDuration={0}
            style={[
              styles.tabIcon,
              { tintColor: routeName === 'Store' ? Colors.blueGrey500 : Colors.blueGrey100 }
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          activeOpacity={1}
          onPress={() => this.handleNavigate('Favorites')}
        >
          <Image
            source={Images.heart}
            fadeDuration={0}
            style={[
              styles.tabIcon,
              { tintColor: routeName === 'Favorites' ? Colors.blueGrey500 : Colors.blueGrey100 }
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          activeOpacity={1}
          onPress={() => this.handleNavigate('Cart')}
        >
          <Image
            source={Images.shoppingCart}
            fadeDuration={0}
            style={[
              styles.tabIcon,
              { tintColor: routeName === 'Cart' ? Colors.blueGrey500 : Colors.blueGrey100 }
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          activeOpacity={1}
          onPress={() => this.handleNavigate('Profile')}
        >
          <Image
            source={Images.userMale}
            fadeDuration={0}
            style={[
              styles.tabIcon,
              { tintColor: routeName === 'Profile' ? Colors.blueGrey500 : Colors.blueGrey100 }
            ]}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(TabBar);
