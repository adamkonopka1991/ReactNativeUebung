/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';

import App from './App';
import {name as appName} from './app.json';


AppRegistry.registerComponent(appName, () => App); // app is function that returns jsx || now we have another function that returns jsx
