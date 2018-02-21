import React from 'react';
import { StatusBar, KeyboardAvoidingView, View } from 'react-native';
import NavBar from '../../components/NavBar/NavBar';
import styles from './ScreenStyles';

class Screen extends React.Component {

  render() {
    const { children, navbar } = this.props;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="default" />
        {!!navbar && (
          <NavBar
            title={navbar.title}
            leftControls={navbar.leftControls}
            rightControls={navbar.rightControls}
          />
        )}
        <KeyboardAvoidingView behavior="padding" style={styles.content}>
          {children}
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default Screen;
