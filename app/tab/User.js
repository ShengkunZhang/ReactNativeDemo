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

    pushToUUU = () => {
      Navigation.push(this.props.componentId, {
          component: {
            name: 'UPS',
            options: {
              bottomTabs: {
                visible: false
              }
            }
          }
      })
    };

    render () {
        return (
            <View style={styles.root}>
              <Text>Hello User</Text>
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