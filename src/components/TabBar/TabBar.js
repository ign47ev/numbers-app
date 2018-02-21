import React from 'react';
import { SafeAreaView, withNavigation } from 'react-navigation';
import Tab from './Tab';
import { Images, Colors } from '@themes';
import styles from './TabBarStyles';

class TabBar extends React.Component {

  render() {
    const { navigation, jumpToIndex, style } = this.props;

    return (
      <SafeAreaView
        forceInset={{ top: 'never', bottom: 'always' }}
        style={[styles.container, style]}
      >
        {navigation.state.routes.map((route, index) => (
          <Tab
            key={index}
            index={index}
            focused={index === navigation.state.index}
            onPress={() => jumpToIndex(index)}
          />
        ))}
      </SafeAreaView>
    );
  }
}

export default withNavigation(TabBar);
