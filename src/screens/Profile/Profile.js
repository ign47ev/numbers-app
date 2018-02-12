import React from 'react';
import Screen from '../../components/Screen/Screen';
import Form from '../../containers/Form/Form';

class Profile extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <Screen navigation={navigation}>
        <Form />
      </Screen>
    );
  }
}

export default Profile;
