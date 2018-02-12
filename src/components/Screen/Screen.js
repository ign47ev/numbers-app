import React from 'react';
import PropTypes from 'prop-types';
import { KeyboardAvoidingView, StatusBar, Platform } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import NavBar from '../../components/NavBar/NavBar';
import TabBar from '../../components/TabBar/TabBar';
import styles from './ScreenStyles';

class Screen extends React.Component {

  static propTypes = {
    navigation: PropTypes.shape().isRequired,
    children: PropTypes.element,
    statusBarStyle: PropTypes.string,
    navBarVisible: PropTypes.bool,
    tabBarVisible: PropTypes.bool,
  };

  static defaultProps = {
    statusBarStyle: 'default',
    navBarVisible: true,
    tabBarVisible: true,
  };

  render() {
    const {
      children,
      navigation,
      navBarVisible,
      tabBarVisible,
    } = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="default" />
        {navBarVisible && <NavBar navigation={navigation} />}
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={styles.content}>
          {children}
        </KeyboardAvoidingView>
        {tabBarVisible && <TabBar navigation={navigation} />}
      </SafeAreaView>
    );
  }
}

export default Screen;
