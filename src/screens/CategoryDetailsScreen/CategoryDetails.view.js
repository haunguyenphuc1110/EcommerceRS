import React, { Component } from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import styles from './CategoryDetails.styles';

import ScreenIds from '../../navigation/screenIds';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS, IMAGES } from '../../assets';

import Spinner from '../../components/Common/LoadingIndicator/Loading.conponent';
import Header from '../../components/Header/Header.component';
import ProposeContainer from '../../components/ProposeContainer/ProposeContainer.component';

class CategoryDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      id: props.navigation.getParam('id', ''),
      isCateLvl1: props.navigation.getParam('isCateLvl1', false),
      isCateLvl2: props.navigation.getParam('isCateLvl2', false),
      isCateLvl3: props.navigation.getParam('isCateLvl3', false),
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
    const { id, isCateLvl1, isCateLvl2, isCateLvl3 } = this.state;
    isCateLvl1 && this.props.getTopProductCateLvl1(id);
    isCateLvl2 && this.props.getTopProductCateLvl2(id);
    isCateLvl3 && this.props.getTopProductCateLvl3(id);
  }

  onNavigateToSearch = () => {
    this.props.navigation.navigate(ScreenIds.SEARCH);
  }

  onNavigateToDetails = (item) => {
    this.props.saveViewedProduct(item);
    this.props.navigation.navigate(ScreenIds.PRODUCT_DETAILS, { item });
  }

  render() {
    const { isLoading, isCateLvl1, isCateLvl2, isCateLvl3 } = this.state;
    const {
      navigation,
      topProductCateLvl1,
      topProductCateLvl2,
      topProductCateLvl3
    } = this.props;
    return (
      <ScrollView contentContainerStyle={{ backgroundColor: COLORS.lightGray }} showsVerticalScrollIndicator={false}>
        <Spinner
          visible={isLoading}
          // textContent={'Loading...'}
          textStyle={{ color: COLORS.white }}
          cancelable={!isLoading}
          overlayColor={COLORS.white}
          color={COLORS.darkGray}
        />
        <Header
          navigation={navigation}
          onNavigateToSearch={this.onNavigateToSearch}
        />

        <View style={[styles.popularContainer, { paddingLeft: 0 }]}>
          <View style={[styles.header, { marginLeft: 10 }]}>
            <Icon
              name={'ios-medal'}
              color={COLORS.appColor}
              size={22} />
            <Text style={styles.title}>PHỔ BIẾN</Text>
          </View>
          {
            ((isCateLvl1 && topProductCateLvl1.length) 
              || (isCateLvl2 && topProductCateLvl2.length) 
              || (isCateLvl3 && topProductCateLvl3.length))
              ? (<ProposeContainer
                data={isCateLvl1 ? topProductCateLvl1 : isCateLvl2 ? topProductCateLvl2 : topProductCateLvl3}
                onNavigateToDetails={this.onNavigateToDetails}
              />)
              : (<View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 100 }}>
                  <Image source={IMAGES.DEFAULT} style={{ width: 100, height: 100, borderRadius: 10 }}/>
                  <Text>Không có sản phẩm trong danh mục này</Text>
                </View>)
          }

        </View>
      </ScrollView>
    )
  }
}

CategoryDetails.defaultProps = {
  loadMoreCategory: true
}

export default CategoryDetails;
