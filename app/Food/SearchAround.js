import React, { Component } from 'react'
import {
	View,
	Image,
	Dimensions,
	Text,
	ScrollView,
	ListView,
	Button

	} from 'react-native'
import Swiper from 'react-native-swiper'
const { width, height } = Dimensions.get('window')
//listView的子组件
import ItemDetails from './Details.js'
export default class extends Component {
	constructor() {
	    super();
	}
	//通过fetch拿到数据
	getMoviesFromApiAsync() {
	    fetch('http://restapi.amap.com/v3/place/around?key=92aba05705faf5f180bc567bad30f013&location=104.074772,30.611539&keywords=%E7%81%AB%E9%94%85&types=&offset=5&page=1&extensions=all')
  			.then((response) => response.json())
	      	.then((responsehaha) => {
	      		let rendList = [];
      			let data = responsehaha.pois;//获取当前的数据
	          	console.log('---------responseJson.movies:--------------',data);
	          	for (var i = 0; i < data.length; i++) {
		  			rendList.push(<ItemDetails key={i} dataSourceArr={data[i]} />);
		  		}
		  		// console.log('=============rendListrendList----****-*-*-*-*-*-*-*-============>>>>',rendList)
		  		return rendList;
	      	})
	      	.catch((error) => {
	        	console.log(error);
	      	});
  	}
	//请求数据/
	//请求加载数据的页数,ip,暂时写死
	rendItems(){
		// alert('aaa');
		var renderLists = [];
		var request = new XMLHttpRequest();
		request.open('GET', 'http://restapi.amap.com/v3/place/around?key=92aba05705faf5f180bc567bad30f013&location=104.074772,30.611539&keywords=%E7%81%AB%E9%94%85&types=&offset=5&page=1&extensions=all');
		request.onreadystatechange = (e) => {
		  if (request.readyState !== 4) {
		    return;
		  }
		  if (request.status === 200) {
		  	let data = JSON.parse(request.responseText);//获取当前的数据
		  	//获取有效定位的数据
		  	console.log('=========================>>>>',data.pois[0]);
		  	for (var i = 0; i < data.pois.length; i++) {
		  		renderLists.push(<Text key={i}>data.pois[i].name</Text>);
		  	}

		    return renderLists;
		  } else {
		    console.warn('error');
		  }
		};
		request.send();	
	}	
	//使用渲染函数来进行渲染
	render () {
		return (
			<ScrollView 
				contentContainerStyle={styles.container}
				>
				{this.getMoviesFromApiAsync()}
				
				<Text style={styles.text}>1231313</Text>
			</ScrollView>
		)
	}
	
}
//样式表
const styles = {

	container: {
		flex:1,
		width:width,
		alignItems:'center',

	},
	text:{
		color:'#f00',
		fontSize:28
	},
}
