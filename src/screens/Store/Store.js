import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, ScrollView, Text, ActionSheetIOS } from 'react-native';
import Screen from '../../components/Screen/Screen';
import Icon from '../../components/Icon/Icon';
import { Numbers } from '../../actions';
import { Images, Colors } from '@themes';

// import styles from './StoreStyles';

class Store extends React.Component {

  componentDidMount() {
    // this.props.dispatchGetNumbers();
  }

  handleActionSheet = () => {
    ActionSheetIOS.showActionSheetWithOptions({
        options: ['Close', 'Get photos', 'Delete'],
        subject: 'subject',
        cancelButtonIndex: 0,
        destructiveButtonIndex: 2,
      },
      (buttonIndex) => {
        if (buttonIndex === 1) {
        }
      });
  };

  render() {
    const { navigation, numbers, dispatchGetNumbers } = this.props;

    console.log({numbers});

    return (
      <Screen navigation={navigation}>
        <ScrollView>
          <Text style={{ fontFamily: 'Roboto', fontSize: 32, fontWeight: '300' }}>Roboto</Text>
          <Text style={{ fontFamily: 'Roboto', fontSize: 32, fontWeight: '400' }}>Roboto</Text>
          <Text style={{ fontFamily: 'Roboto', fontSize: 32, fontWeight: '500' }}>Roboto</Text>
          <Text style={{ fontFamily: 'Roboto', fontSize: 32, fontWeight: '700' }}>Roboto</Text>
          <Text style={{ fontFamily: 'Roboto', fontSize: 32, fontWeight: '900' }}>Roboto</Text>
          <Button
            onPress={() => dispatchGetNumbers('Linkin Park')}
            title="Get numbers"
          />
          <Button
            onPress={() => navigation.navigate('Blank', { title: 'Filters' })}
            title="Open Blank"
          />
          <Button onPress={() => navigation.goBack(null)} title="Go back" />
          <Icon
            source={Images.plus}
            size={50}
            tintColor={Colors.blueGrey700}
            onPress={this.handleActionSheet}
          />
          <Icon
            source={Images.plus}
            size={50}
            tintColor={Colors.blueGrey700}
          />
          {numbers.map(number => (
            <Text key={number.id}>{`${number.nomer} - ${number.cena}`}</Text>
          ))}
        </ScrollView>
      </Screen>
    );
  }
}

const mapStateToProps = state => ({
  numbers: state.numbers,
});

const mapDispatchToProps = dispatch => ({
  dispatchGetNumbers: bindActionCreators(Numbers.getNumbers, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Store);
