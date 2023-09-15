import { AppRegistry } from 'react-native';
import App from './App'; // Import your root component (usually named App)
import { name as appName } from './app.json';

// Register the root component of your app
AppRegistry.registerComponent(appName, () => App);
