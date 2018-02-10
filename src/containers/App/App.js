import React from 'react';
import { Button, View, ScrollView, StatusBar, Text } from 'react-native';
import { SafeAreaView, StackNavigator, TabNavigator } from 'react-navigation';
import TabBar from '../../components/TabBar/TabBar';
import Icon from '../../components/Icon/Icon';

const HomeScreen = ({ navigation }) => (
  <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Text style={{ fontFamily: 'Roboto', fontSize: 64 }}>Home</Text>
        <Text style={{ fontSize: 64 }}>Home</Text>
        <Button
          onPress={() => navigation.navigate('Profile', { name: 'Pettya' })}
          title="Open profile screen"
        />
        <Button onPress={() => navigation.goBack(null)} title="Go back" />
        <Icon
          source={require('../../../assets/images/icons8-plus-100.png')}
          size={50}
          tintColor="green"
          onPress={() => alert('test')}
        />
        <Icon
          source={require('../../../assets/images/icons8-plus-100.png')}
          size={50}
          tintColor="grey"
        />
      </ScrollView>
    </View>
    <TabBar navigation={navigation} />
    <StatusBar barStyle="default" />
  </SafeAreaView>
);

const SettingsScreen = ({ navigation }) => (
  <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
    <View style={{ flex: 1 }}>
      <Text>Settings</Text>
      <Button
        onPress={() => navigation.navigate('Profile', { name: 'Petya' })}
        title="Open profile screen"
      />
      <Button onPress={() => navigation.goBack(null)} title="Go back" />
    </View>
    <TabBar navigation={navigation} />
    <StatusBar barStyle="default" />
  </SafeAreaView>
);

const ProfileScreen = ({ navigation }) => (
  <SafeAreaView style={{ flex: 1, backgroundColor: "#6a51ae" }}>
    <View style={{ flex: 1 }}>
      <Text>Settings</Text>
      <Button
        onPress={() => navigation.navigate('Profile', { name: 'Vasya' })}
        title="Open profile screen"
      />
      <Button onPress={() => navigation.goBack(null)} title="Go back" />
    </View>
    <StatusBar barStyle="light-content" />
  </SafeAreaView>
);

const TabNav = TabNavigator(
  {
    Home: {
      screen: HomeScreen,
      path: '/home',
      navigationOptions: {
        title: 'Home',
        tabBarLabel: 'Home',
        // tabBarIcon: ({ tintColor, focused }) => (
        //     <Ionicons
        //         name={focused ? 'ios-home' : 'ios-home-outline'}
        //         size={26}
        //         style={{ color: tintColor }}
        //     />
        // ),
      },
    },
    Settings: {
      screen: SettingsScreen,
      path: '/settings',
      navigationOptions: {
        title: 'Settings',
        // tabBarIcon: ({ tintColor, focused }) => (
        //     <Ionicons
        //         name={focused ? 'ios-settings' : 'ios-settings-outline'}
        //         size={26}
        //         style={{ color: tintColor }}
        //     />
        // ),
      },
    },
  },
  {
    tabBarComponent: () => null,
    animationEnabled: false,
    swipeEnabled: false,
  }
);

const StacksOverTabs = StackNavigator({
  Tabs: {
    screen: TabNav,
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      title: 'Settings',
    },
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      title: 'Profile',
    },
  },
}, {
  headerMode: 'none',
  navigationOptions: {
    header: null,
  },
});

export default StacksOverTabs;
