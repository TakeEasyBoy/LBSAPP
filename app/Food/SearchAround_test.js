import React, { Component } from 'react'
import {
	View,
	Image,
	Dimensions,
	Text,
	ScrollView,
	Button
	} from 'react-native'
import Swiper from 'react-native-swiper'
const { width, height } = Dimensions.get('window')

export default class extends Component {
	constructor() {
	    super();

	}

	//请求数据/
	getMoviesFromApiAsync() {
	    fetch('http://restapi.amap.com/v3/place/around?key=92aba05705faf5f180bc567bad30f013&location=104.074772,30.611539&keywords=%E7%81%AB%E9%94%85&types=&offset=20&page=1&extensions=all')
  			.then((response) => response.json())
	      	.then((responseJson) => {
	          console.log('---------responseJson.movies:--------------',responseJson.movies);
	      })
	      .catch((error) => {
	        console.log(error);
	      });
  	}
	LoadData(){
		// alert('aaa');
		var request = new XMLHttpRequest();
		request.open('GET', 'http://restapi.amap.com/v3/place/around?key=92aba05705faf5f180bc567bad30f013&location=104.074772,30.611539&keywords=%E7%81%AB%E9%94%85&types=&offset=20&page=1&extensions=all');
		request.onreadystatechange = (e) => {
		  if (request.readyState !== 4) {
		    return;
		  }

		  if (request.status === 200) {
		  	var data = JSON.parse(request.responseText);//获取当前的数据
		  	//获取有效定位的数据
		  	console.log('=========================>>>>',data.pois[0]);
		    console.log('success', typeof JSON.parse(request.responseText));
		    
		  } else {
		    console.warn('error');
		  }
		};

		
		request.send();	
	}	
	//使用渲染函数来进行渲染
	render () {
		return (
			<View style={styles.container}>
				<Button 
				onPress={this.getMoviesFromApiAsync}
				title='点我加载'
				style={styles.button}></Button>
			</View>
		)
	}
}
//样式表
const styles = {

	container: {
		// width:width/3,
		alignItems:'center',

	},
	button:{
	},
}
