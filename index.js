/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import FirstScreen from './app/FirstScreen';

AppRegistry.registerComponent(appName, () => FirstScreen);
