import { Navigation } from 'react-native-navigation';
import Readme from './screen/Readme'
import UserProfileU from './screen/UserProfileU'
import HomeScreen from './tab/Home'
import UserScreen from './tab/User'
import AboutScreen from './tab/About'
import SideMenu from './tab/SideMenu'

var tabChildren = []

function getNormalOption(title) {
    return {
        topBar: {
            title: {
                text: title
            }
        }
    }
}

function getOptions(title, text, icon) {
    return {
        topBar: {
            title: {
                text: title
            }
        },
        bottomTab: {
          text: text,
          icon: icon,
        }
    }
}

function getStack(stackID, childrenID, childrenName) {
    return {
        stack: {
            id: stackID,
            children: [{
                component: {
                    id: childrenID,
                    name: childrenName,
                }
            }]
        }
    }
}

export function NavigationSetTab () {
    
    Readme.options = getNormalOption('ReadMe')
    // UserProfileU.options = getNormalOption('UPS')
    // 注册普通组件
    Navigation.registerComponent('Readme', () => Readme);
    Navigation.registerComponent('UPS', () => UserProfileU);

    // 注册侧边栏组件
    Navigation.registerComponent('SideMenu', () => SideMenu);

    HomeScreen.options = getOptions('Home', '首页', require('../assets/tab/home.png'))
    UserScreen.options = getOptions('User', '我', require('../assets/tab/user.png'))
    AboutScreen.options = getOptions('About', '关于', require('../assets/tab/user.png'))
    // 注册tab组件
    Navigation.registerComponent('Home', () => HomeScreen);
    Navigation.registerComponent('User', () => UserScreen);
    Navigation.registerComponent('About', () => AboutScreen);

    // getStack(stackID, childrenID, childrenName)
    var home = getStack('HOME_TAB', 'HOME_SCREEN', 'Home')
    var user = getStack('USER_TAB', 'USER_SCREEN', 'User')
    var about = getStack('ABOUT_TAB', 'ABOUT_SCREEN', 'About')
    tabChildren.length = 0
    tabChildren.push(home)
    tabChildren.push(user)
    tabChildren.push(about)
    
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
          ...Platform.select({ android: { iconWidth: 16, iconHeight: 16 } }),
          ...Platform.select({ ios: {  iconInsets: {
                    top: -2,
                    bottom: -2,
                    left: -2,
                    right: -2,
                }
            }}),
        },
        // 侧边栏
        sideMenu: {
            left: {
              visible: false
            }
        }
    });
}

export const NavigationSetTabRoot = {
    root: {
        sideMenu: {
            id: 'SIDE_MENU_ID',
            center: {
                bottomTabs:{
                    id: 'BOTTOM_TABS_ID',
                    children: tabChildren,
                }
            },
            left: {
                component: {
                    id:'SideMenuID_left',
                    name: 'SideMenu',
                },
            },
            right: {
                component: {
                    id:'SideMenuID_right',
                    name: 'SideMenu',
                },
            }
        }
    }
  }