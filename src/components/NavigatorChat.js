import { createStackNavigator } from 'react-navigation';
import { ChatContactList } from './ChatContactList.js';
import { ChatContact } from './ChatContact';

//O primeiro item do Navigator é o Home da tela configurada
export const NavigatorChat = createStackNavigator({
    ChatContactList: {
      screen: ChatContactList,
    },
    ChatContact: {
      screen: ChatContact
    },
});
