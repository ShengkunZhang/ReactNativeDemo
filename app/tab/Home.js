import React, {PureComponent} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { isTab } from '../Global'
import { NavigationSet, NavigationSetRoot } from '../NavigationSet'
import { NavigationSetTab, NavigationSetTabRoot } from '../NavigationSetTab'

var isShowTab = isTab
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
        isShowTab = true
        NavigationSetTab()
        Navigation.setRoot(NavigationSetTabRoot);
    };

    changeNav = () => {
        isShowTab = false
        NavigationSet()
        Navigation.setRoot(NavigationSetRoot);
    };

    changeTab = () => {
      var componentId = this.props.componentId
      console.log(componentId, 'componentId');
      // 切换底部tab的两种方式
      /*
        基础知识：底部tab栏是一个整体，它本身有一个tabID，比如：当前工程的是BOTTOM_TABS_ID
        底部tab栏的每一个子tab，有一个子tab的ID，例如：第一个tab是Home，tabID是HOME_TAB
        子tab中必须至少有一个界面，子tab Home的第一个界面的ID是 HOME_SCREEN
        1. 核心之一是：componentId，当前处于Home界面，此时的componentId为HOME_SCREEN
           此时HOME_SCREEN处于活跃状态，所以可以正常切换，此时在home界面，可以直接使用HOME_SCREEN
        2. 文档说：componentId 也可以是子tab的ID，即HOME_TAB。
           在3.2.0版本中，安卓的componentId这个必须是界面ID不可以是子tab的ID，否则不可以代码切换选中的tab
        3. currentTabId 这个参数，官方说可以是子tabID 例如：ABOUT_TAB，
           也可以是子tab的 子数组中的任意一个界面ID，例如：ABOUT_SCREEN，均可进行切换
        4. 在3.2.0版本中一个单独注册的界面，且这个界面不包含在任何一个子tab中，这个时候如果切换tab选中项，必须使用当前选中的tabID
           例如：在user界面，跳转到uuu界面，在uuu界面，切换当前选中的tab，此时必须会用当前选中的tabID
      */
      if (isShowTab) {
        Navigation.mergeOptions(componentId, {
          bottomTabs: {
            currentTabIndex: 1,
          },
        });
      } else {
        var currentTabId = 'ABOUT_TAB'
        // var currentTabId = 'ABOUT_SCREEN'
        Navigation.mergeOptions(componentId, {
          bottomTabs: {
            currentTabId: currentTabId
          }
        });
      }
    };

    render () {
        return (
            <View style={styles.root}>
              <Text>Hello React Native Navigation 👋</Text>
              {isShowTab && <Button
                title='Change Select Tab'
                color='red'
                onPress={this.changeTab}/>}
              {isShowTab && <Button
                title='Change to Navigation'
                color='#790ce9'
                onPress={this.changeNav}/>}
              {!isShowTab && <Button
                title='Change to Tab Navigation'
                color='#719ce0'
                onPress={this.changeTabNav}/>}
              {!isShowTab && <Button
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