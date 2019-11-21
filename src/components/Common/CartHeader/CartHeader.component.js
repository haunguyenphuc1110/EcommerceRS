import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';
import ScreenIds from '../../../navigation/screenIds';
import styles from './CartHeader.styles';

const Header = props => {
	const { navigation, color } = props;
	return (
		<TouchableOpacity onPress={() => navigation.navigate(ScreenIds.CART)} >
			<Icon
				name='shopping-cart'
				color={color}
				size={20}
				style={styles.icon}
			/>
			<View
				style={styles.headerRight}
			>
				<Text
					style={styles.textHeaderRight}
				>
					10
				</Text>
			</View>
		</TouchableOpacity>
	);
}

const mapStateToProps = state => {
	return {
		
	};
};

export default connect(mapStateToProps)(Header);