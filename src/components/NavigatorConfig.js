import { createDrawerNavigator } from 'react-navigation';
import { ConfigAppScreen } from './ConfigAppScreen.js';
import { ConfigProfileScreen } from './ConfigProfileScreen.js';

//O primeiro item do Navigator é o Home da tela configurada
export const NavigatorConfig = createDrawerNavigator({
    ConfigAppScreen: {
      screen: ConfigAppScreen,
    },
    ConfigProfileScreen: {
      screen: ConfigProfileScreen
    },
});
