import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import styles from './MoreCategory.styles';

import ScreenIds from '../../navigation/screenIds';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS, IMAGES } from '../../assets';

import Spinner from '../../components/Common/LoadingIndicator/Loading.conponent';
import Header from '../../components/Header/Header.component';
import CategoryListContainer from '../../components/CategoryListContainer/CategoryListContainer.component';
import ProposeContainer from '../../components/ProposeContainer/ProposeContainer.component';

class MoreCategory extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      id: props.navigation.getParam('id', '')
    }
  }

  componentWillReceiveProps(nextProps) {
    const { pending } = nextProps;
    const { pending: previousPending } = this.props;
    if (!pending && pending !== previousPending) {
      this.setState({
        isLoading: false
      })
    }
  }

  componentDidMount() {
    const { id } = this.state;
    const { 
      getListCategoryLvl2ByCategoryLvl1,
      getTopProductCateLvl1
    } = this.props;
    getTopProductCateLvl1(id);
    getListCategoryLvl2ByCategoryLvl1(id);
  }

  onNavigateToSearch = () => {
    this.props.navigation.navigate(ScreenIds.SEARCH);
  }

  onNavigateToDetails = (item) => {
    this.props.saveViewedProduct(item);
    this.props.navigation.navigate(ScreenIds.PRODUCT_DETAILS, { item });
  }

  onNavigationToListCate = (id, title) => {
    this.props.navigation.push(ScreenIds.LIST_CATEGORY, { id, title });
  }

  render() {
    const { isLoading } = this.state;
    const {
      navigation,
      topProductCateLvl1,
      listCategoryLvl2
    } = this.props;
    return (
      <ScrollView contentContainerStyle={{ backgroundColor: COLORS.lightGray }} showsVerticalScrollIndicator={false}>
        <Spinner
          visible={isLoading}
          textStyle={{ color: COLORS.white }}
          cancelable={!isLoading}
          overlayColor={COLORS.white}
          color={COLORS.darkGray}
        />
        <Header
          navigation={navigation}
          onNavigateToSearch={this.onNavigateToSearch}
        />

        <View style={[styles.popularContainer, { paddingLeft: 10, paddingTop: 0 }]}>
          <CategoryListContainer
            data={listCategoryLvl2}
            onNavigationToListCate={this.onNavigationToListCate} />
        </View>

        <View style={[styles.popularContainer, { paddingLeft: 0 }]}>
          <View style={[styles.header, { marginLeft: 10 }]}>
            <Icon
              name={'ios-medal'}
              color={COLORS.appColor}
              size={16} />
            <Text style={styles.title}>PHỔ BIẾN</Text>
          </View>
          <ProposeContainer
            data={topProductCateLvl1.slice(0, 50)}
            onNavigateToDetails={this.onNavigateToDetails}
          />
        </View>
      </ScrollView>
    )
  }
}

export default MoreCategory;
