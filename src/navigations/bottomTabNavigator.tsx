import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../scenes/home/home.scenes';
import { About } from '../scenes/about/about.scenes';
import { Notification } from '../scenes/notification/notification.scenes';
import { Info } from '../scenes/InfoScreen/info';
import Icon from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
    return (
        <Tab.Navigator screenOptions={(route) => ({
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => {
                let iconName: string;
                if (route.route.name == "Home") {
                    iconName = focused ? 'ios-home-sharp' : 'ios-home-outline'
                } else if (route.route.name == "About") {
                    iconName = focused ? 'ios-person-circle-sharp' : 'ios-person-circle-outline'
                } else if (route.route.name == "Notification") {
                    iconName = focused ? 'notifications-circle' : 'notifications-circle-outline'
                } else if (route.route.name == "Info") {
                    iconName = focused ? 'settings-sharp' : 'settings-outline'
                }
                return <Icon name={iconName} size={22} color={color} />
            }
        })}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="About" component={About} />
            <Tab.Screen name="Notification" component={Notification} />
            <Tab.Screen name="Info" component={Info} />
        </Tab.Navigator >
    );
};

export default BottomTabNavigator;