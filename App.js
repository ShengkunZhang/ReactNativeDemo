import { Navigation } from 'react-native-navigation';
import { isTab } from './app/Global'
import { NavigationSet, NavigationSetRoot } from './app/NavigationSet'
import { NavigationSetTab, NavigationSetTabRoot } from './app/NavigationSetTab'

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