import React, {Component} from 'react';
import {
    Button
} from 'react-native';

class MainScreen extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Button
                title="Go to Jane's profile"
                onPress={() =>
                    navigate('Profile', { name: 'Jane' })
                }
            />
        );
    }
}

MainScreen.propTypes = {};
MainScreen.defaultProps = {};

export default MainScreen;
