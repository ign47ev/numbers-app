import React from 'react';
import { Button, View, StatusBar, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import NavBar from '../../components/NavBar/NavBar';

class Blank extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <NavBar navigation={navigation} />
        <View style={{ flex: 1 }}>
          <Text>Blank</Text>
          <Button onPress={() => navigation.goBack(null)} title="Go back" />
        </View>
        <StatusBar barStyle="default" />
      </SafeAreaView>
    );
  }
}

export default Blank;
