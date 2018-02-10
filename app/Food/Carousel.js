import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	Text,
	Image
	} from 'react-native'
import PropTypes from 'prop-types';

//引入轮播插件

import Swiper from 'react-native-swiper';

//引入图片
import banner1 from '../imgs/banner1.jpg'
import banner2 from '../imgs/banner2.jpg'
import banner3 from '../imgs/banner3.jpg'
import banner4 from '../imgs/banner4.jpg'
import banner5 from '../imgs/banner5.jpg'
//引入获取屏幕宽高的组件
import Utils from '../public/public.js'
//轮播参数
const renderPagination = (index, total, context) => {
	return (
		<View style={styles.paginationStyle}>
			<Text style={{ color: 'grey' }}>
				<Text style={styles.paginationText}>{index + 1}</Text>/{total}
			</Text>
		</View>
	)
}
class Carousel extends Component {
	render() {
		return (

			<Swiper
				style={styles.wrapper}
				loop={true}
				autoplay={true}
				dot={<View style={styles.dot} />}
				activeDot={<View style={styles.doted} />}
				paginationStyle={{ top:130}}
				>
					<View style={styles.slide} >
						<Image style={styles.image} source={banner1} />
					</View>
					<View style={styles.slide} >
						<Image style={styles.image} source={banner2} />
					</View>
					<View style={styles.slide} >
						<Image style={styles.image} source={banner3} />
					</View>
					<View style={styles.slide} >
						<Image style={styles.image} source={banner4} />
					</View>
					<View style={styles.slide} >
						<Image style={styles.image} source={banner5} />
					</View>
			</Swiper>
		);
	}
}

Carousel.propTypes = {};
Carousel.defaultProps = {};

var styles = StyleSheet.create({
	wrapper:{
		height:150
	},
	slide: {
	},
	text: {
		color: '#fff',
		fontSize: 30,
		fontWeight: 'bold'
	},
	image: {
		width: Utils.size.width,
		height: 150,
	},
	dot:{
		backgroundColor: 'rgba(200,200,200,.8)',
		width: 10,
		height: 3,
		marginLeft: 7,
		marginRight: 7,
	},
	doted:{
		backgroundColor: '#fff',
		width: 10,
		height: 10,
		borderRadius: 7,
		marginLeft: 7,
		marginRight: 7,
	}
})

export default Carousel;

