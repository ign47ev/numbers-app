import React from 'react';
import { Button, View, ScrollView, StatusBar, Text, ActionSheetIOS } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import NavBar from '../../components/NavBar/NavBar';
import TabBar from '../../components/TabBar/TabBar';
import Icon from '../../components/Icon/Icon';
import styles from './StoreStyles';

class Store extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="default" />
        <NavBar navigation={navigation} />
        <View style={{ flex: 1 }}>
          <ScrollView>
            <Text style={{ fontFamily: 'Roboto', fontSize: 32, fontWeight: '300' }}>Roboto</Text>
            <Text style={{ fontFamily: 'Roboto', fontSize: 32, fontWeight: '400' }}>Roboto</Text>
            <Text style={{ fontFamily: 'Roboto', fontSize: 32, fontWeight: '500' }}>Roboto</Text>
            <Text style={{ fontFamily: 'Roboto', fontSize: 32, fontWeight: '700' }}>Roboto</Text>
            <Text style={{ fontFamily: 'Roboto', fontSize: 32, fontWeight: '900' }}>Roboto</Text>
            <Button
              onPress={() => navigation.navigate('Blank', { title: 'Filters' })}
              title="Open Blank"
            />
            <Button onPress={() => navigation.goBack(null)} title="Go back" />
            <Icon
              source={require('../../../assets/images/icons8-plus-100.png')}
              size={50}
              tintColor="green"
              onPress={() => {
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
              }}
            />
            <Icon
              source={require('../../../assets/images/icons8-plus-100.png')}
              size={50}
              tintColor="grey"
            />
          </ScrollView>
        </View>
        <TabBar navigation={navigation} />
      </SafeAreaView>
    );
  }
}

export default Store;
