import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { DeviceEvent } from '../Global'
import {  DeviceEventEmitter } from 'react-native';

export default class SideMenu extends React.Component {

    componentDidMount() {
      // 左右使用的都是这个控件，所以componentDidMount执行了两次
      this.navigationEventListener = Navigation.events().bindComponent(this);
    }

    componentWillUnmount() {
      this.navigationEventListener.remove();
    }

    componentDidAppear() {
      console.log('SideMenu 显示了');
      DeviceEventEmitter.emit(DeviceEvent.SideMenuDisappearEvent)
    }

    componentDidDisappear() {
      console.log('SideMenu 消失了');
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