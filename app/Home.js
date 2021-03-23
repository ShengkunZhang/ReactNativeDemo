import React, {PureComponent} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { NavigationSet, NavigationSetRoot } from './NavigationSet'
import { NavigationSetTab, NavigationSetTabRoot } from './NavigationSetTab'

export default class Home extends PureComponent {

    pushOtherVC = () => {
        console.log(this.props);
        Navigation.push(this.props.componentId, {
            component: {
              name: 'Readme',
              options: {
                bottomTabs: {
                  visible: false
                }
              }
            }
        })
    };

    changeTabNav = () => {
        NavigationSetTab()
        Navigation.setRoot(NavigationSetTabRoot);
    };

    changeNav = () => {
        NavigationSet()
        Navigation.setRoot(NavigationSetRoot);
    };

    render () {
        return (
            <View style={styles.root}>
              <Text>Hello React Native Navigation 👋</Text>
              <Button
                title='Change to Navigation'
                color='#790ce9'
                onPress={this.changeNav}/>
              <Button
                title='Change to Tab Navigation'
                color='#719ce0'
                onPress={this.changeTabNav}/>
              <Button
                title='Push Readme Screen'
                color='#710ce3'
                onPress={this.pushOtherVC}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    root: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'whitesmoke'
    }
});