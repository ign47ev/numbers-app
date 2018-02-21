import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView, withNavigation } from 'react-navigation';
import Icon from '../Icon/Icon';
import { Images, Colors } from '@themes';
import styles from './NavBarStyles';

class NavBar extends React.Component {

  render() {
    const { style, title, leftControls, rightControls } = this.props;

    return (
      <SafeAreaView
        forceInset={{ top: 'always', bottom: 'never' }}
        style={[styles.container, style]}
      >
        <View style={styles.left}>
          {!!leftControls && leftControls.map((control, index) => (
            <Icon
              key={index}
              source={Images[control.icon]}
              size={25}
              wrapperSize={42}
              tintColor={Colors.blueGrey500}
              onPress={control.handler}
            />
          ))}
        </View>
        <View style={styles.center}>
          <Text style={styles.title}>{`${title}`}</Text>
        </View>
        <View style={styles.right}>
          {!!rightControls && rightControls.map((control, index) => (
            <Icon
              key={index}
              source={Images[control.icon]}
              size={25}
              wrapperSize={42}
              tintColor={Colors.blueGrey500}
              onPress={control.handler}
            />
          ))}
        </View>
      </SafeAreaView>
    );
  }
}

export default withNavigation(NavBar);
