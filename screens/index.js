import { View, Text } from 'react-native'
import React from 'react'

class AppHome extends React.Component {
    async componentDidMount() {
        console.log("some work here");
    }
    render() {
        return (
            <View>
                <Text> i am some text</Text>
            </View>
        )
    }
}

export default AppHome;