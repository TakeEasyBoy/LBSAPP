'use strict';
import React, {Component} from 'react';
import {
	Image,
	ScrollView,
	StyleSheet,
	Text,
	View,
	Dimensions,
	} from 'react-native';

/*  顶级标签不能使用  ScrollView 使用 */
let {height,width} = Dimensions.get('window');
export default class extends Component {
	constructor() {
		super();
	};
	render() {
		return (
			<ScrollView
				contentContainerStyle={styles.contentContainer}
				bounces={false}
				pagingEnabled={true}
				horizontal={true}>
				<Image source={{uri:'launther_image'}} style={styles.backgroundImage} />
				<Image source={{uri:'launther_image222'}} style={styles.backgroundImage} />
			</ScrollView>
		);
	}
};

var styles = StyleSheet.create({
	contentContainer: {
		width: width*3,
		height: height,
	},
	backgroundImage: {
		width: width,
		height: height,
	},
});
