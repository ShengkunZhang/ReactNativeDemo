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
});