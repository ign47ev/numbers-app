import React from 'react';
import { ScrollView, Button, Text } from 'react-native';
import Screen from '../../components/Screen/Screen';
import Icon from '../../components/Icon/Icon';
import { Images, Colors } from '@themes';

class Blank extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <Screen
        navbar={{
          title: 'Blank',
          leftControls: [
            {
              icon: 'back',
              handler: () => navigation.goBack(),
            }
          ],
          rightControls: [
            {
              icon: 'plus',
              handler: () => alert('clicked plus'),
            }
          ],
        }}>
        <ScrollView>
          <Text>Blank</Text>
          <Button onPress={() => navigation.goBack(null)} title="Go back" />
          <Icon source={Images.plus} size={50} tintColor={Colors.blueGrey} />
          <Icon source={Images.plus} size={50} tintColor={Colors.blueGrey50} />
          <Icon source={Images.plus} size={50} tintColor={Colors.blueGrey100} />
          <Icon source={Images.plus} size={50} tintColor={Colors.blueGrey200} />
          <Icon source={Images.plus} size={50} tintColor={Colors.blueGrey300} />
          <Icon source={Images.plus} size={50} tintColor={Colors.blueGrey400} />
          <Icon source={Images.plus} size={50} tintColor={Colors.blueGrey500} />
          <Icon source={Images.plus} size={50} tintColor={Colors.blueGrey600} />
          <Icon source={Images.plus} size={50} tintColor={Colors.blueGrey700} />
          <Icon source={Images.plus} size={50} tintColor={Colors.blueGrey800} />
          <Icon source={Images.plus} size={50} tintColor={Colors.blueGrey900} />
        </ScrollView>
      </Screen>
    );
  }
}

export default Blank;
