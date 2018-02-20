import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { SafeAreaView, withNavigation } from 'react-navigation';
import Icon from '../Icon/Icon';
import { Images, Colors } from '@themes';
import styles from './NavBarStyles';

class NavBar extends React.Component {

  static propTypes = {
    navigation: PropTypes.shape(),
    overContent: PropTypes.bool,
    style: PropTypes.shape(),
  };

  static defaultProps = {
    overContent: false,
    style: null,
  };

  render() {
    const { navigation, overContent, style } = this.props;

    return (
      <SafeAreaView
        forceInset={{ top: 'always', bottom: 'never' }}
        style={[styles.container, overContent ? styles.containerAbsolute : null, style]}
      >
        <View style={styles.left}>
          <Icon
            source={Images.back}
            size={25}
            wrapperSize={50}
            tintColor={Colors.blueGrey500}
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
            source={Images.plus}
            size={25}
            wrapperSize={50}
            tintColor={Colors.blueGrey500}
            onPress={() => navigation.goBack()}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default withNavigation(NavBar);
