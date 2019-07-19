import { createAppContainer, createStackNavigator } from 'react-navigation';

import Home from './pages/Home';
import Cart from './pages/Cart';

const Routes = createAppContainer(
  createStackNavigator(
    { Home, Cart },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: { backgroundColor: '#141419' },
        headerTintColor: '#f6f6fa',
      },
    }
  )
);

export default Routes;
