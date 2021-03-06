// 1. 引入
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

// 2. 声明组件类
class ISHotel extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text  style={styles.font}>酒店</Text>
            </View>
        );
    }
}

ISHotel.propTypes = {};
ISHotel.defaultProps = {};

const styles = StyleSheet.create({
    container : {
        flex :1,
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor : '#3366ee'
    },
    font:{
        color : '#fff',
        fontSize: 18
    }
});

// 3. 导出
export default ISHotel;
