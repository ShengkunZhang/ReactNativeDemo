import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Navigation } from 'react-native-navigation';

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

    changeTab = () => {
      // Navigation.mergeOptions(this.props.componentId, {
      //   bottomTabs: {
      //     currentTabIndex: 0,
      //   },
      // });

      Navigation.mergeOptions(this.props.componentId, {
        bottomTabs: {
          currentTabId: 'ABOUT_TAB'
        }
      });
    };

    render () {
        return (
            <View style={styles.root}>
              <Text>Hello UserProfileScreen</Text>
              <Button
                title='改变当前选中的底部tab'
                color='red'
                onPress={this.changeTab}/>
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