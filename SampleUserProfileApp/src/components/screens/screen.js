

import { Navigation } from 'react-native-navigation';

import UsersList from './UsersList';
import UserProfile from './UserProfile';
import Message from './Message';


export function registerScreens() {
	Navigation.registerComponent('UsersList', () => UsersList);
	Navigation.registerComponent('UserProfile', () => UserProfile);
	Navigation.registerComponent('Message', () => Message);
}


