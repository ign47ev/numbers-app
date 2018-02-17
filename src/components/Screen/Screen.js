import React from 'react';
import PropTypes from 'prop-types';
import { KeyboardAvoidingView, StatusBar, Platform } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import NavBar from '../../components/NavBar/NavBar';
import TabBar from '../../components/TabBar/TabBar';
import styles from './ScreenStyles';

class Screen extends React.Component {

  static propTypes = {
    children: PropTypes.oneOfType(PropTypes.element, PropTypes.array),
    safeAreaColor: PropTypes.string,
    statusBarColor: PropTypes.string,
    navBarVisible: PropTypes.bool,
    tabBarVisible: PropTypes.bool,
  };

  static defaultProps = {
    safeAreaColor: '#fff',
    statusBarColor: 'default',
    navBarVisible: true,
    tabBarVisible: true,
  };

  render() {
    const { children, safeAreaColor, statusBarColor, navBarVisible, tabBarVisible } = this.props;

    return (
      <SafeAreaView style={[styles.container, { backgroundColor: safeAreaColor }]}>
        <StatusBar barStyle={statusBarColor} />
        {navBarVisible && <NavBar />}
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          style={styles.content}
        >
          {children}
        </KeyboardAvoidingView>
        {tabBarVisible && <TabBar />}
      </SafeAreaView>
    );
  }
}

export default Screen;
