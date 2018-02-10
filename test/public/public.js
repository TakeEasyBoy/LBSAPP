import React from 'react';
import Dimensions from 'Dimensions';

//设置一个获取屏幕宽高的公共类,使用的 是  Dimensions

const Util = {
	size: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height
	},
};

export default Util;
