import { View, Text, Button, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Logo, FONTFAMILY } from '../utils/constant';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Wallet from '../screens/wallet';


function CustomIcons(props) {
    if (props.name == "My Wallet") {
        return (
            <MaterialCommunityIcons name="wallet-outline" size={props.size} color={props.color} />

        )
    }
    else if (props.name == "Ride history") {
        return (
            <MaterialCommunityIcons name="history" size={props.size} color={props.color} />
        )
    }
    else if (props.name == "Support") {
        return (
            <MaterialIcons name="support-agent" size={props.size} color={props.color} />
        )
    }
    else if (props.name == "Profile") {
        return (
            <MaterialCommunityIcons name="account-circle-outline" size={props.size} color={props.color} />
        )
    }
    else {
        return (
            <MaterialCommunityIcons name={props.name} size={props.size} color={props.color} />
        )
    }
}



function WalletScreen({ navigation }) {
    return (
        <Wallet props={navigation}/>
    );
}


const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
    const { state, descriptors, navigation } = props;
    return (
        <DrawerContentScrollView {...props}>
            <Image source={Logo} alt="brand" style={{ resizeMode: "contain", height: 150, width: "100%" }} />
            <View style={{ marginTop: "10%", marginLeft: "5%" }}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    return (
                        <TouchableOpacity
                            accessibilityRole="button"
                            key={index}
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={{ height: 40, width: "100%", margin: 10, display: "flex", flexDirection: "row", alignItems: "center" }}
                        >
                            <CustomIcons name={label} size={30} color="black" />
                            <Text style={{ textAlign: "center", fontFamily: FONTFAMILY.BOLD, paddingLeft: 12 }}>{label}</Text>

                        </TouchableOpacity>
                    );
                })}
            </View>
        </DrawerContentScrollView>
    );
}


export default function AppStack() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Wallet" useLegacyImplementation
                drawerContent={(props) => <CustomDrawerContent {...props} />}
            >
                <Drawer.Screen name="My Wallet" component={WalletScreen} options={{
                    headerShown: false
                }} />
                <Drawer.Screen name="Ride history" component={WalletScreen} options={{
                    headerShown: false
                }} />
                <Drawer.Screen name="Support" component={WalletScreen} options={{
                    headerShown: false
                }} />
                <Drawer.Screen name="Profile" component={WalletScreen} options={{
                    headerShown: false
                }} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}