import React, { Component } from 'react';
import {
	Text,
	View,
	StyleSheet,
	Image,
	TouchableOpacity,

	} from 'react-native'
import { StackNavigator } from 'react-navigation';
import PropTypes from 'prop-types';
import Searcharound from './SearchAround'
import iconPerson from '../imgs/icon_topbar_personal.png'
class TopBar extends Component {

	constructor(props){
		super(props);
	}
	render() {
		return (
			<View style={styles.container}>
				{/*left*/}
				<TouchableOpacity style={styles.left} >
					<Text style={styles.font}>成都</Text>
					<Text style={styles.icon}></Text>
				</TouchableOpacity>
				{/*center TouchableOpacity 也可以作为容器*/}
				<TouchableOpacity style={styles.center}>
					<Text style={styles.placeholder}>&#xe986;请输入商品名、店铺名</Text>
				</TouchableOpacity>
				{/*right*/}
				<TouchableOpacity>
					<Image style={styles.right} source={iconPerson} />
				</TouchableOpacity>
			</View>
		);
	}
}

TopBar.propTypes = {};
TopBar.defaultProps = {};


//需要在顶级标签来使用这个跳转导航的路由


const styles = StyleSheet.create({
	container : {
		flexDirection:'row',
		alignItems: 'center',
		backgroundColor:'#00A7FF'
	},
	left:{
		flexDirection:'row',
		padding:5,
		alignItems:'center',
	},
	center:{
		flex:1,
		borderWidth:1,
		borderColor:'#fff',
		padding:5,
		margin:10,
		borderRadius:15,
		backgroundColor:'#fff'
	},
	font:{
		color : '#fff',
		fontSize: 18,
		fontWeight:'bold',
	},
	placeholder:{
		color:'#ccc',
		fontSize:18,
		paddingLeft:5,
		// 使用字体图标
		fontFamily :'icomoon',
	},
	right:{
		marginRight:5,
		height:30,
		width:30,
	},
	//定位旁边的图标
	icon:{
		width:10,
		height:10,
		borderColor:'#fff',
		paddingLeft:5,
		marginLeft:4,
		marginBottom:2,
		borderWidth:1,
		borderLeftWidth:0,
		borderTopWidth:0,
		transform:[{rotate:'45deg'}]
	},

});

export default TopBar;
