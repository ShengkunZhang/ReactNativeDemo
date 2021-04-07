import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { DeviceEvent } from '../Global'
import {  DeviceEventEmitter } from 'react-native';

export default class User extends React.Component {
    // 解析传过来的参数作为标题
    static options(props) {
      return {
        topBar: {
          title: {
            text: props.name
          }
        }
      };
    }

    constructor(props) {
      super(props)
      this.state = {
        badgeCount: 1,
        leftVisible: false,
        rightVisible: false,
      }
    }

    componentDidMount() {
      this.subsription = DeviceEventEmitter.addListener(DeviceEvent.SideMenuDisappearEvent, this.handleSideMenuEvent)
    }

    componentWillUnmount() {
      this.subsription.remove()
    }

    handleSideMenuEvent = () => {
      this.setState({leftVisible: false})
      this.setState({rightVisible: false})
    }

    pushToUUU = () => {
      const passProps = {
        name: 'John DoeAD',
        status: 'online'
      }
      Navigation.push(this.props.componentId, {
          component: {
            name: 'UPS',
            passProps,
            options: {
              bottomTabs: {
                visible: false
              },
              // push出来的界面，禁止侧滑出现侧边栏效果
              sideMenu: {
                left:{
                  enabled: false,
                }
              },
            }
          }
      })
    };

    addBageCount = () => {
      this.setState({badgeCount: this.state.badgeCount + 1})
      Navigation.mergeOptions(this.props.componentId, {
        bottomTab: {
          badge: String(this.state.badgeCount),
          color: 'red',
        },
      });
    }

    changeTitle = () => {
      this.setState({badgeCount: this.state.badgeCount + 1})
      var name = 'AAA'+ this.state.badgeCount
      const options = {
        topBar: {
          title: {
            text: name,
            color: 'red',
          },
        },
      };
      Navigation.mergeOptions(this.props.componentId, options);
    }

    changeLeftVisible = () => {
      this.setState({leftVisible: true}, () => {
        // 状态改变之后，处理相关逻辑
        this.changeVisible(true)
      })
    }

    changeRightVisible = () => {
      this.setState({rightVisible: true}, () => {
        this.changeVisible(false)
      })
    }

    changeVisible = (isLeft) => {
      // 如果同时设置left和right需要保证状态互斥
      var options = {}
      if (isLeft) {
        options = {
          sideMenu: {
            left: {
              visible: this.state.leftVisible,
            }
          }
        }
      } else {
        options = {
          sideMenu: {
            right: {
              visible: this.state.rightVisible,
            }
          }
        }
      }
      Navigation.mergeOptions(this.props.componentId, options);
    }

    render () {
        var leftText = this.state.leftVisible ? '隐藏' : '显示';
        var rightText = this.state.rightVisible ? '隐藏' : '显示';
        return (
            <View style={styles.root}>
              <Text>Hello User</Text>
              <Button
                title={`${leftText}左边侧边栏`}
                color='red'
                onPress={this.changeLeftVisible}/>
              <Button
                title={`${rightText}右边侧边栏`}
                color='red'
                onPress={this.changeRightVisible}/>
              <Button
                title='动态改变标题'
                color='red'
                onPress={this.changeTitle}/>
              <Button
                title='增加未读数'
                color='red'
                onPress={this.addBageCount}/>
              <Button
                title='Push to UUU'
                color='red'
                onPress={this.pushToUUU}/>
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