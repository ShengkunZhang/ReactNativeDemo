import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { DeviceEvent } from '../Global'
import {  DeviceEventEmitter } from 'react-native';

export default class SideMenu extends React.Component {

    constructor(props) {
      super(props)
      Navigation.events().registerComponentDidDisappearListener(({componentName, componentType}) => {
        if ('SideMenu' === componentName) {
          // 左右使用的都是这个控件，所以注册了两次，会有两次回调
          DeviceEventEmitter.emit(DeviceEvent.SideMenuDisappearEvent)
        }
      });
    }

    render () {
        return (
            <View style={styles.root}>
              <Text>Hello 侧边栏</Text>
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