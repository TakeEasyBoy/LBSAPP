import React, { Component } from 'react'
import {
	View,
	Image,
	Dimensions,
	Text,
	ListView,
	StyleSheet
	} from 'react-native'

const { width, height } = Dimensions.get('window')


export default class extends Component {
	constructor(props) {
		super(props);
		//实例化一个datasource,判断是否相等以判断一行是否发生过变化
		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		//将数据源设置成状态,因此,在拿到后台数据后就可以根据state来更新页面了
		this.state = {
			//将row1 row2数据拷入ds中
			dataSource: ds.cloneWithRows(props.dataSourceArr)
		};
	}
	//渲染函数
	renderRow(rowData){
		//console.log('===================================>>>>>>>>>>>>>');
		return (
			<View style={styles.boxStyle}>
				<Image style={{height:50,width:50}} source={{uri:rowData.image}}/>
				<Text>{rowData.title}</Text>
			</View>
			)
	}
	//使用渲染函数来进行渲染
	render () {
		return (
			<ListView
				// 数据源（必填）
				dataSource={this.state.dataSource}
				// 行渲染规则（必填）
				renderRow={this.renderRow}
				// 组件内容渲染
				contentContainerStyle={styles.contentStyle}
			/>
		)
	}
}
//样式表
const styles = StyleSheet.create({
	contentStyle : {
		flexDirection : 'row',
		flexWrap :'wrap',
		justifyContent:'space-between',
		width : width, // 和屏幕宽度一致
		// height:100,
		//backgroundColor : '#fff'
	},
	boxStyle:{
		width:70,
		height:70,
		
		//marginLeft : ?? //  算法（width-50*5）/ （5+1）
		alignItems : 'center',

		marginTop : 10
	}
});