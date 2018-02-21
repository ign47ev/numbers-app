import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Images, Colors } from '@themes';
import styles from './TabBarStyles';

class Tab extends React.Component {

  shouldComponentUpdate(nextProps) {
    return this.props.focused !== nextProps.focused;
  };

  render() {
    const { index, focused, onPress } = this.props;

    return (
      <TouchableOpacity
        style={styles.tab}
        activeOpacity={1}
        onPress={onPress}
      >
        <Image
          source={Images.navigation[index]}
          fadeDuration={0}
          style={[
            styles.tabIcon,
            {
              tintColor: focused
                ? Colors.blueGrey900
                : Colors.blueGrey200
            }
          ]}
        />
      </TouchableOpacity>
    );
  }
}

export default Tab;
