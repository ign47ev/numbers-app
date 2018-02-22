import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, ScrollView, Text } from 'react-native';
import Screen from '../../components/Screen/Screen';
import { Numbers } from '../../actions';
import { Images, Colors } from '@themes';

// import styles from './StoreStyles';

class Store extends React.Component {

  render() {
    const { navigation, numbers, dispatchGetNumbers } = this.props;

    return (
      <Screen
        navbar={{
          title: 'Store',
          leftControls: [],
          rightControls: [
            {
              icon: 'plus',
              handler: () => alert('clicked plus'),
            }
          ],
        }}>
        <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
          <Button
            onPress={() => dispatchGetNumbers()}
            title="Get numbers"
          />
          <Button
            onPress={() => navigation.navigate('Blank', { title: 'Filters' })}
            title="Open Blank"
          />
          <Button onPress={() => navigation.goBack(null)} title="Go back" />
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
