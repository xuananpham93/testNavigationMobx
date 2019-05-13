// @flow

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { observer, inject } from 'mobx-react/native';

type Props = {
    AuthStore: {
        isLoading: string,
        action_getIsLoading: Function
    }
};

@inject('AuthStore')
@observer
class WelcomeScreen extends Component<Props> {
    render() {
        return (
            <View>
                <Text> WelcomeScreen {this.props.AuthStore.isLoading} {this.props.AuthStore.action_getIsLoading()}</Text>
            </View>
        );
    }
}

export default WelcomeScreen;
