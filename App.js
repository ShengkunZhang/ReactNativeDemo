import Readme from './app/Readme'
import { Navigation } from "react-native-navigation";

Readme.options = {
  topBar: {
    title: {
      text: 'Home',
      color: 'white'
    },
    background: {
      color: '#4d089a'
    }
  }
}
Navigation.registerComponent('Readme', () => Readme);

Navigation.events().registerAppLaunchedListener(() => {
   Navigation.setRoot({
     root: {
       stack: {
          children: [
            {
              component: {
                name: 'Readme'
              }
            }
          ]
        }
      }
   });
});