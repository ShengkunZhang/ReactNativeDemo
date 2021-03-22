import { Navigation } from 'react-native-navigation';
import { NavigationSet } from './app/NavigationSet'

NavigationSet()

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
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
  });
});