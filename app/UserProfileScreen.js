import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class UserProfileScreen extends React.Component {
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

    render () {
        return (
            <View style={styles.root}>
              <Text>Hello UUU</Text>
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