import React from 'react';
import PropTypes from 'prop-types';
import { StatusBar, KeyboardAvoidingView, View } from 'react-native';
import NavBar from '../../components/NavBar/NavBar';
import TabBar from '../../components/TabBar/TabBar';
import styles from './ScreenStyles';

class Screen extends React.Component {

  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
    statusBarColor: PropTypes.string,
    navBarVisible: PropTypes.bool,
    tabBarVisible: PropTypes.bool,
  };

  static defaultProps = {
    statusBarColor: 'default',
    navBarVisible: true,
    tabBarVisible: true,
  };

  render() {
    const { children, statusBarColor, navBarVisible, tabBarVisible } = this.props;

    return (
      <View style={styles.container}>
        <StatusBar barStyle={statusBarColor} />
        {navBarVisible && <NavBar />}
        <KeyboardAvoidingView behavior="padding" style={styles.content}>
          {children}
        </KeyboardAvoidingView>
        {tabBarVisible && <TabBar />}
      </View>
    );
  }
}

export default Screen;
