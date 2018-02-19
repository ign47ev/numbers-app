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
} from 'react-native';
import { People, Auth } from '../../actions';
import styles from './FormStyles'

class Form extends React.Component {

  state = {
    text: 'John',
    switch: true,
  };

  addPerson = () => {
    const newPerson = {
      id: +Date.now().toString(),
      name: this.state.text,
    };
    this.props.dispatchAddPerson(newPerson);
  };

  deletePerson = personId => {
    this.props.dispatchDeletePerson(personId);
  };

  handleSwitch = () => {
    this.setState(prevState => ({ switch: !prevState.switch }), () => {
      StatusBar.setHidden(!this.state.switch, 'slide');
    });
  };

  render() {
    const { token, persons } = this.props;

    return (
      <ScrollView style={styles.scrollWrapper} contentContainerStyle={styles.scrollContent}>
        <Text>{`TOKEN - ${token}`}</Text>
        <Button
          onPress={this.props.dispatchSetToken}
          title="Set token"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={this.props.dispatchClearToken}
          title="Clear token"
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
        {persons.map(person => (
          <View key={person.id} style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text>{`${person.id} - ${person.name}`}</Text>
            <Button title="Delete" onPress={() => this.deletePerson(person.id)} />
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
  token: state.auth.token,
  persons: state.people.persons,
});

const mapDispatchToProps = dispatch => ({
  dispatchSetToken: bindActionCreators(Auth.setToken, dispatch),
  dispatchClearToken: bindActionCreators(Auth.clearToken, dispatch),
  dispatchAddPerson: bindActionCreators(People.addPerson, dispatch),
  dispatchDeletePerson: bindActionCreators(People.deletePerson, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
