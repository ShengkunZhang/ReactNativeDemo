import React, {PureComponent} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { isTab } from './Global'
import { NavigationSet, NavigationSetRoot } from './NavigationSet'
import { NavigationSetTab, NavigationSetTabRoot } from './NavigationSetTab'

export default class Home extends PureComponent {

    constructor(props) {
      super(props)
      
      Navigation.events().registerBottomTabSelectedListener(({selectedTabIndex, unselectedTabIndex}) => {
        console.log('selectedTabIndex' , selectedTabIndex);
        console.log('unselectedTabIndex' , unselectedTabIndex);
      });

      Navigation.events().registerComponentDidAppearListener((ComponentDidAppearEvent) => {
        if (props.componentId === ComponentDidAppearEvent.componentId) {
          console.log('didAppear2' , ComponentDidAppearEvent);
        }
      });

      Navigation.events().registerComponentDidDisappearListener(({componentName, componentType}) => {
        if ('Home' === componentName) {
          console.log('didDisappear4' , componentName, componentType);
        }
      });
    }

    pushUVC = () => {
        console.log(this.props);
        const passProps = {
            name: 'John Doe',
            status: 'online'
          }
        Navigation.push(this.props.componentId, {
            component: {
              name: 'UPS',
              id: '123456',
              passProps,
              options: {
                bottomTabs: {
                  visible: false
                }
              }
            }
        })
    }

    pushRDVC = () => {
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
              {!isTab && <Button
                title='NO tab Push UUU Screen'
                color='#710ce3'
                onPress={this.pushUVC}/>}
              <Button
                title='Push Readme Screen'
                color='#710ce3'
                onPress={this.pushRDVC}/>
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