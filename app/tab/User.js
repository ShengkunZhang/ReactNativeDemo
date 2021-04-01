import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Navigation } from 'react-native-navigation';

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
        badgeCount: 1
      }
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
              }
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

    render () {
        return (
            <View style={styles.root}>
              <Text>Hello User</Text>
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