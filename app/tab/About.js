import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

export default class About extends React.Component {
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
          <ScrollableTabView
            style={{ marginTop: 0 }}
            initialPage={0}
            renderTabBar={() => <ScrollableTabBar />}
          >
            <Text tabLabel='全部'>My</Text>
            <Text tabLabel='联系人'>favorite</Text>
            <Text tabLabel='讨论组'>project</Text>
            <Text tabLabel='频道'>favorite</Text>
            <Text tabLabel='聊天记录'>project</Text>
          </ScrollableTabView>
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