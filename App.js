import { Navigation } from 'react-native-navigation';
import { NavigationSet, NavigationSetRoot } from './app/NavigationSet'
import { NavigationSetTab, NavigationSetTabRoot } from './app/NavigationSetTab'

var isTab = true
if (isTab) {
  // 底部栏导航
  NavigationSetTab()
} else {
  // 普通导航
  NavigationSet()
}

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot(isTab ? NavigationSetTabRoot : NavigationSetRoot);

  // 监听界面的显示和隐藏事件
  Navigation.events().registerComponentDidAppearListener(({componentId}) => {
    console.log('DidAppear' , componentId);
  });

  Navigation.events().registerComponentDidDisappearListener(({componentId}) => {
    console.log('DidDisappear' , componentId);
  });
});