import { Navigation } from 'react-native-navigation';
import Readme from './Readme'
import HomeScreen from './Home'
import UserProfileScreen from './UserProfileScreen'

export function NavigationSet () {
    Readme.options = {
        topBar: {
            title: {
                text: 'Readme'
            }
        }
    }
    
    HomeScreen.options = {
        topBar: {
            title: {
                text: 'Home'
            }
        }
    }

    // // 如果这个界面标题是动态，则不能再这设置标题，否则就固定了
    // UserProfileScreen.options = {
    //     topBar: {
    //         title: {
    //             text: 'UOP'
    //         }
    //     }
    // }
    
    // 注册组件
    Navigation.registerComponent('Home', () => HomeScreen);
    Navigation.registerComponent('Readme', () => Readme);
    Navigation.registerComponent('UPS', () => UserProfileScreen);
    
    // 导航栏默认主题
    Navigation.setDefaultOptions({
        statusBar: {
            backgroundColor: '#4d089a'
        },
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
        }
    });
}

export const NavigationSetRoot = {
    root: {
        stack: {
            children: [
              {
                component: {
                  name: 'Home'
                }
              }
            ]
        }
    }
  }