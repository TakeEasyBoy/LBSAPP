// 1. 引入
import React, {Component} from 'react';
import {
    Image,
    StyleSheet
} from 'react-native';

// 安装的页面导航组件
import TabNavigator from 'react-native-tab-navigator';
// 引入自定义组件
import ISFood from '../Food/ISFood';
import ISMovie from '../Movie/ISMovie';
import ISHotel from '../Hotel/ISHotel';
import ISBank from '../Bank/ISBank';

// 2. 声明组件类
class ISMain extends Component {
    // 初始化状态
	constructor(props){
        super(props)
		this.state = {
			selectedTab : 'food'
		}
	 }
    render() {
        return (
            <TabNavigator >
                {/* 第一个 */}
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'food'}
                    title="美食"
                    renderIcon={() => <Image source={{uri:'food'}} style={styles.iconStyle} />}
                    renderSelectedIcon={() => <Image source={{uri:'foodsed'}} style={styles.iconStyle}  />}
                    onPress={() => this.setState({ selectedTab: 'food' })}>
                    <ISFood/>
                </TabNavigator.Item>

                {/* 第二个 */}
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'movie'}
                    title="电影"
                    renderIcon={() => <Image source={{uri:'movie'}} style={styles.iconStyle} />}
                    renderSelectedIcon={() => <Image source={{uri:'moviesed'}} style={styles.iconStyle}  />}
                    onPress={() => this.setState({ selectedTab: 'movie' })}>
                    <ISMovie/>
                </TabNavigator.Item>

                {/* 第三个 */}
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'hotel'}
                    title="酒店"
                    renderIcon={() => <Image source={{uri:'hotel'}} style={styles.iconStyle} />}
                    renderSelectedIcon={() => <Image source={{uri:'hotelesed'}} style={styles.iconStyle}  />}
                    onPress={() => this.setState({ selectedTab: 'hotel' })}>
                    <ISHotel/>
                </TabNavigator.Item>

                {/* 第四个 */}
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'bank'}
                    title="银行"
                    renderIcon={() => <Image source={{uri:'bank'}} style={styles.iconStyle} />}
                    renderSelectedIcon={() => <Image source={{uri:'banksed'}} style={styles.iconStyle}  />}
                    onPress={() => this.setState({ selectedTab: 'bank' })}>
                    <ISBank/>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}
ISMain.propTypes = {};
ISMain.defaultProps = {};

const styles = StyleSheet.create({
    iconStyle:{
        height : 30,
        width: 30
    }
});

// 3. 导出
export default ISMain;
