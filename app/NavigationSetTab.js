import { Navigation } from 'react-native-navigation';
import Readme from './Readme'
import HomeScreen from './Home'

export function NavigationSetTab () {
    Readme.options = {
        topBar: {
            title: {
                text: 'Readme'
            }
        },
        bottomTab: {
          text: '我',
          icon: require('./bookmark.png'),
        }
    }
    
    HomeScreen.options = {
        topBar: {
            title: {
                text: 'Home'
            }
        },
        bottomTab: {
          text: '首页',
          icon: require('./save.png'),
        }
    }
    
    // 注册组件
    Navigation.registerComponent('Home', () => HomeScreen);
    Navigation.registerComponent('Readme', () => Readme);
    
    // 导航栏默认主题
    Navigation.setDefaultOptions({
        // 状态栏
        statusBar: {
            backgroundColor: '#4d089a'
        },
        // 顶部导航栏
        topBar: {
            title: {
                color: 'white'
            },
            backButton: {
                color: 'white'
            },
            background: {
                color: '#4d089a'
            }
        },
        // 底部tab栏
        bottomTab: {
          fontSize: 10,
          selectedFontSize: 11,
          textColor: 'blue',
          selectedTextColor: 'red',
          iconColor: 'blue',
          selectedIconColor: 'red',
        }
    });
}

export const NavigationSetTabRoot = {
    root: {
        bottomTabs:{
            children:[
                {
                  stack: {
                      children: [{
                          component: {
                              name: 'Home'
                          }
                      }]
                  }
                },{
                  stack: {
                      children: [{
                          component: {
                              name: 'Readme'
                          }
                      }]
                  }
                }
            ]
        }
    }
  }