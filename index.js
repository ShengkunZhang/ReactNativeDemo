/**
 * @format
 */

import {YellowBox} from 'react-native';
import './App';

if (__DEV__) {
  YellowBox.ignoreWarnings([
      'Warning: componentWillReceiveProps',

      // Hide warnings caused by React Native (https://github.com/facebook/react-native/issues/20841)
      'Require cycle: node_modules/react-native/Libraries/Network/fetch.js',
  ]);
}
