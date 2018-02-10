import {
    StackNavigator,
} from 'react-navigation';

import MainScreen from './MainScreen';
import ProfileScreen from './ProfileScreen';

const BasicApp = StackNavigator({
    // key        : value
    // 路由名称   : 路由配置
    Main: {screen: MainScreen},
    Profile: {screen: ProfileScreen},
});

export default BasicApp;