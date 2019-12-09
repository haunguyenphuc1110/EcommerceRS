import React from 'react';
import Survey from './Survey.view';
import { connect } from 'react-redux';
import { sendListChosenCategory } from '../../store/actions/surveyDataActions';

const SurveyScreen = (props) => (<Survey {...props}/>);

const mapStateToProps = state => {
	return {
		categoryDataLvl1: state.homeReducer.listCategoryLvl1,
		pending: state.categoryReducer.pending,
		error: state.categoryReducer.pending,
		userId: state.userReducer.userId
	};
};

const mapDispatchToProps = dispatch => {
	return {
		sendListChosenCategory: (payload) => dispatch(sendListChosenCategory(payload))
	};
};

SurveyScreen.navigationOptions = {
  header: null
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyScreen);