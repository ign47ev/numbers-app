import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  StatusBar,
  Text,
  TextInput,
  Switch,
  ScrollView,
  View,
  Button,
  Keyboard,
} from 'react-native';
import { addPerson, deletePerson } from '../../actions/people';
import styles from './FormStyles'

class Form extends React.Component {

  state = {
    text: 'John',
    switch: true,
  };

  addPerson = () => {
    const { text } = this.state;
    this.props.dispatchAddPerson({ name: text });
    this.setState({ text: Date.now().toString() });
  };

  deletePerson = person => {
    this.props.dispatchDeletePerson(person);
  };

  handleSwitch = () => {
    this.setState(prevState => ({ switch: !prevState.switch }), () => {
      StatusBar.setHidden(!this.state.switch, 'slide');
    });
  };

  render() {
    const { people } = this.props;

    return (
      <ScrollView style={styles.scrollWrapper} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Button
          onPress={() => Keyboard.dismiss()}
          title="Hide keyboard"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={this.addPerson}
          title="Add person"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Switch
          onValueChange={this.handleSwitch}
          value={this.state.switch}
        />
        {people.map((person, index) => (
          <View key={index} style={{ flex: 1, flexDirection: 'row' }}>
            <Text style={styles.welcome}>{person.name}</Text>
            <Button title="Delete" onPress={() => this.deletePerson(person)} />
          </View>
        ))}
        <TextInput
          editable={this.state.switch}
          keyboardType="default"
          autoCorrect={false}
          clearButtonMode="while-editing"
          keyboardAppearance="dark"
          returnKeyType="done"
          style={{ width: '100%', height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
          onSubmitEditing={this.addPerson}
        />
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  people: state.people.people,
});

const mapDispatchToProps = dispatch => ({
  dispatchAddPerson: bindActionCreators(addPerson, dispatch),
  dispatchDeletePerson: bindActionCreators(deletePerson, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
