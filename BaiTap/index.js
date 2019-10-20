import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
} from 'react-native';

export default class BaiTapReactNative extends Component {
    render(){
        return (
            // <Navigator
            //     initialRoute={{ name:'homePage' }}
            //     renderScene={this.renderScene}
            // />
            <View>
                WELCOME TO REACT NATIVE asdf
            </View>
        );
    }
}
AppRegistry.registerComponent(BaiTapReactNative, () => BaiTapReactNative);
