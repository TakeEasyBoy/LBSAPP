// 1. 引入
import React, {Component} from 'react';
import {
    View,
    Text,
	Image,
	ScrollView,
    StyleSheet,
	Dimensions
} from 'react-native';

//引入轮播
//import Swiper from 'react-native-swiper';
//引入头部
import Topbar from './TopBar.js'
import Carousel from './Carousel.js'
import Categories from './Categories.js'
import Around	from './SearchAround.js'


let {width} = Dimensions.get('window');
// 2. 声明组件类
class ISFood extends Component {
    render() {
        return (
            <View style={styles.container}>
	            <Topbar style={styles.header}/>
	            <ScrollView>
		            <Carousel/>
		            <Categories style={styles.category}/>
		            <Around style={styles.around}/>	
	            </ScrollView>
            </View>
        );
    }
}

ISFood.propTypes = {};
ISFood.defaultProps = {};

const styles = StyleSheet.create({
    container : {
        flex :1,
//      justifyContent: 'flex-start',
        //alignItems: 'center',
    },
	header:{
		position:'absolute',
		top:0,
		left:0
	},
    category:{
        height:180,
    },
    around:{
        height:300,
	    width:width,
    },
    font:{
        color : '#fff',
        fontSize: 18
    },

});

// 3. 导出
export default ISFood;
