import React from 'react';
import Survey from './Survey.view';
import { connect } from 'react-redux';

const SurveyScreen = (props) => (<Survey {...props}/>);

const mapStateToProps = state => {
	return {

	};
};

const mapDispatchToProps = dispatch => {
	return {
		
	};
};

SurveyScreen.navigationOptions = {
  header: null
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyScreen);