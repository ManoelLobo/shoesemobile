/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import Reactotron from 'reactotron-react-native';

const tron = Reactotron.configure()
  .useReactNative()
  .connect();

console.tron = tron;
