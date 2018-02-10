// 1. 引入
import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';




import ISMain from './app/Main/ISMain.js';
import ISLauntherPage from './app/Main/ISLauntherPage';
import Searcharound from './app/Food/SearchAround';
import TopBar from './app/Food/TopBar'
//Test
/*
 import ISMain from './test/Main/ISMain';
 import ISLauntherPage from './test/Main/ISLauntherPage';
*/

//动画函数配置,通过CardStackStyleInterpolator.***调用
import CardStackStyleInterpolator  from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';



//需要在顶级标签来使用这个跳转导航的路由
const RootNavigator = StackNavigator(
	{
		ISMain: {
			screen: ISMain,
		},
		ISLauntherPage: {
			screen: ISLauntherPage,
		},
		Searcharound: {
			screen:Searcharound,
		},
		TopBar: {
			screen: TopBar,
		}

	}
	,
	// 路由配置
	{
		// 默认路由
		initialRouteName  : 'ISLauntherPage',
		//设置头部标题显示
		headerMode : 'none',
		// 设置路由跳转动画
		transitionConfig : (()=>({  // 回调函数,返回一个"配置对象"
			// 设置切换效果
			screenInterpolator :  CardStackStyleInterpolator.forHorizontal
			//screenInterpolator :  CardStackStyleInterpolator.forVertical
			//screenInterpolator :  CardStackStyleInterpolator.forFadeFromBottomAndroid
			//screenInterpolator :  CardStackStyleInterpolator.forFade
		}))
	}
);
// 3. 导出组件
export default RootNavigator;
