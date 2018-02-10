// 使用React.PureComponent对性能的提升是非常可观的，因为它减少了应用中的渲染次数。
import React, {PureComponent} from 'react';
import {
	Image,
	View,
	Text,
	StyleSheet,
} from 'react-native'


class ISLauntherPage extends PureComponent {

	//将要注销组件的话,需要清除该定时器
	componentWillUnmount() {
		// console.log('--------------------------->>>>>clearTimeout timer');
		this.timer && clearTimeout(this.timer);
	}
	//渲染引导页
    render() {
        return (
            <Image source={{uri:'launther_image'}} style={styles.launtherStyle}/>
        );
    }
	//组件渲染完成后,通过定时器来从引导页跳转至主页
	componentDidMount() {
		// console.log('--------------------------->>>>>>>',this.props);
		this.timer = setTimeout(() => this.props.navigation.navigate('ISMain'),3500);
	}
}

const styles = StyleSheet.create({
    launtherStyle : {
        flex :1
    }
})

export default ISLauntherPage;
