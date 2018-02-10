import React, { Component } from 'react'
import {
	View,
	Image,
	Dimensions,
	Text,
	ScrollView,
	} from 'react-native'
import Swiper from 'react-native-swiper'
const { width, height } = Dimensions.get('window')
import data  from './FeatureData.json';
import CategoriesList from './CategoriesList.js'
export default class extends Component {
	constructor() {
	    super();
	    this.state = {
	    	currentPage:0
	    }
	    // 绑定this指向  也可以使用箭头函数
	    // this.setPagenation = this.setPagenation.bind(this);
	}
	//在ScrollView动画切换完成后触发该函数,通过传入事件的x坐标来进行分页
	setPagenation(e){
	    console.log('<<<<<<<<<<---e.nativeEvent.contentOffset.x--------------->>>>',e.nativeEvent.contentOffset.x)

		// 获取滚动条的X坐标,e是 RN封装的事件对象,
		// 如何判断当前页需要显示哪个分页按钮
		// 根据onMomentumScrollEnd 触发,可获得x轴的坐标,用这个值/width即可获得一个页数,当然,向下取整,不足1的,表示未翻页
		var current = Math.floor(e.nativeEvent.contentOffset.x/width);//获取当前分页信息的页码
		console.log('===================current==================',current);
		//将当前页码赋值给currentPage状态
		this.setState({
			currentPage : current
		})
	}
	//调用渲染组件的函数
	rendListsItems(){
		var listsItems = [];
		let datas = data.data;
		for (var i = 0; i < datas.length; i++) {
			 //console.log('=========================>>>>',datas[i]);
			listsItems.push(
				<CategoriesList key={i} dataSourceArr={datas[i]}/>
			);
		}
		return listsItems;
	}
	//渲染页码的函数
	rendIndicator(){
		var indicator = [];
		var datas = data.data;
		var active ;
		for (var i = 0; i < datas.length; i++) {
			active = this.state.currentPage === i ? '#f00' : '#fff';
			indicator.push(
				<Text key={i} style={{fontSize:28,color:active}}>&bull;</Text>
			)
		}
		return indicator;
	}
	//使用渲染函数来进行渲染
	render () {
		return (
			<View style={styles.container}>
				<ScrollView
					horizontal={true}
					showsHorizontalScrollIndicator ={false}
					pagingEnable = {true}
					onMomentumScrollEnd={(e)=>{this.setPagenation(e)}}
					>
					{this.rendListsItems()}
				</ScrollView>
				<View style={{flexDirection:'row',justifyContent:'center',width:width}}>
					{this.rendIndicator()}
				</View>
			</View>
		)
	}
}
//样式表
const styles = {

	container: {
		width:width
	},
	box:{
		justifyContent:'center',
		alignItems:'center',
		width:width/5
	},
}
