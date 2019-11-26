import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import styles from './CategoryDetails.styles';

import { swiperData, dealData, populariryData } from '../../mocks/dataMock';
import ScreenIds from '../../navigation/screenIds';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS, IMAGES } from '../../assets';

import Spinner from '../../components/Common/LoadingIndicator/Loading.conponent';
import Header from '../../components/Header/Header.component';
import SwiperContainer from '../../components/SwiperContainer/SwiperContainer.component';
import RecommendContainer from '../../components/RecommendContainer/RecommendContainer.component';
import ProposeContainer from '../../components/ProposeContainer/ProposeContainer.component';

class CategoryDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
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

  componentDidMount(){
    let id = this.props.navigation.getParam('id', '');
    this.props.getTopProductCateLvl1(id);
  }

  onNavigateToCartSearch = () => {
    this.props.navigation.navigate(ScreenIds.SEARCH);
  }

  onNavigateToDetails = (item) => {
    this.props.navigation.navigate(ScreenIds.PRODUCT_DETAILS, { item });
  }

  onBack = () => {
    this.props.navigation.goBack();
  }

  render() {
    const { isLoading } = this.state;
    const { navigation, categoryData, topProductCateLvl1 } = this.props;
    return (
      <ScrollView contentContainerStyle={{ backgroundColor: COLORS.lightGray }} showsVerticalScrollIndicator={false}>
        <Spinner
          visible={isLoading}
          // textContent={'Loading...'}
          textStyle={{ color: COLORS.white }}
          cancelable={!isLoading}
        />
        <Header
          showHeader={true}
          navigation={navigation}
          onBack={this.onBack}
          onNavigateToCartSearch={this.onNavigateToCartSearch}
        />
        <SwiperContainer
          data={swiperData}
          navigation={navigation}
        />

        <View style={[styles.popularContainer, { paddingLeft: 10 }]}>
          <View style={styles.header}>
            <Icon
              name={'ios-heart'}
              color={COLORS.appColor}
              size={22} />
            <Text style={styles.title}>TOP SẢN PHẨM BÁN CHẠY</Text>
          </View>
          <RecommendContainer data={categoryData} />
        </View>

        <View style={[styles.popularContainer, { paddingLeft: 10 }]}>
          <View style={styles.header}>
            <Icon
              name={'ios-gift'}
              color={COLORS.appColor}
              size={22} />
            <Text style={styles.title}>ƯU ĐÃI CHO BẠN</Text>
          </View>
          <RecommendContainer data={categoryData} />
        </View>

        <View style={[styles.popularContainer, { paddingLeft: 0 }]}>
          <View style={[styles.header, { marginLeft: 10 }]}>
            <Icon
              name={'ios-medal'}
              color={COLORS.appColor}
              size={22} />
            <Text style={styles.title}>PHỔ BIẾN</Text>
          </View>
          <ProposeContainer
            data={topProductCateLvl1}
            onNavigateToDetails={this.onNavigateToDetails}
          />
        </View>
      </ScrollView>
    )
  }
}

export default CategoryDetails;
