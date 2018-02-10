import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

import CardStackStyleInterpolator  from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
	<Button
      onPress={() => navigation.navigate('Details')}
      title="Go to details"
    />
  </View>
);

const DetailsScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Details Screen</Text>
  </View>
);

//  参数1 :  路径路线配置
//  参数2 : StackNavigatorConfig  整个路由的全局配置
const RootNavigatorPlus = StackNavigator(

	{
	  Home: {
		screen: HomeScreen,
		navigationOptions: {
		  headerTitle: '首页',
		},
	  },
	  Details: {
		screen: DetailsScreen,
		navigationOptions: {
		  headerTitle: '详情',
		},
	  },
	}
	// 路由配置
	,{
		// 默认路由
		//initialRouteName  : 'Details'
		
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

export default RootNavigatorPlus;