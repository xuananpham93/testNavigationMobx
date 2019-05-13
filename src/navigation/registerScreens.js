import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'mobx-react';
import stores from '../stores';

import {
    WELCOME_SCREEN,
    LOGIN_SCREEN,
    SINGLE_APP_SCREEN,
    TAB1_SCREEN,
    TAB2_SCREEN
} from './Screens';
import LoginScreen from '../screens/LoginScreen';
import SingleAppScreen from '../screens/SingleAppScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';

function WrappedComponent(Component) {
    return function inject(props) {
        const EnhancedComponent = () => (
            <Provider {...stores}>
                <Component
                    {...props}
                />
            </Provider>
        );

        return <EnhancedComponent />;
    };
}

export default function () {
    Navigation.registerComponent(WELCOME_SCREEN, () => WrappedComponent(WelcomeScreen));
    Navigation.registerComponent(LOGIN_SCREEN, () => WrappedComponent(LoginScreen));
    Navigation.registerComponent(SINGLE_APP_SCREEN, () => WrappedComponent(SingleAppScreen));
    Navigation.registerComponent(TAB1_SCREEN, () => WrappedComponent(Tab1Screen));
    Navigation.registerComponent(TAB2_SCREEN, () => WrappedComponent(Tab2Screen));
    console.info('All screens have been registered...');
}