import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

if (__DEV__) {
  import('./src/config/reactotron');
}

AppRegistry.registerComponent(appName, () => App);
