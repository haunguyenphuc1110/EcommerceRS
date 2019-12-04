import React, { Component } from 'react'
import {
  Text,
  View,
  ScrollView,
  Image
} from 'react-native'
import { swiperData, dealData } from '../../mocks/dataMock';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS, IMAGES } from '../../assets';
import LinearGradient from 'react-native-linear-gradient';
import styles from './Home.styles';
import ScreenIds from '../../navigation/screenIds';
import { shuffle } from '../../utils/randomArray';

import Spinner from '../../components/Common/LoadingIndicator/Loading.conponent';
import CountDown from '../../components/Common/Countdown/Countdown.component';
import SwiperContainer from '../../components/SwiperContainer/SwiperContainer.component';
import DealContainer from '../../components/DealContainer/DealContainer.component';
import PopulaContainer from '../../components/PopularContainer/PopularContainer.component';
import FlashSaleContainer from '../../components/FlashSaleContainer/FlashSaleContainer.component';
import CategoryContainer from '../../components/CategoryContainer/CategoryContainer.component';
import ViewedContainer from '../../components/ViewedContainer/ViewedContainer.component';
import RecommendContainer from '../../components/RecommendContainer/RecommendContainer.component';
import ProposeContainer from '../../components/ProposeContainer/ProposeContainer.component';
import HomeHeader from '../../components/HomeHeader/HomeHeader.component';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      pageNumber: 1
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
    this.props.getListCategoryLvl1();
    this.props.getListCategoryLvl2();
    this.props.getListItem(this.state.pageNumber);
  }

  renderHeader = () => {
    const { navigation } = this.props;
    const { isLoading } = this.state;
    return (
      <View>
        <Spinner
          visible={isLoading}
          textStyle={{ color: COLORS.white }}
          cancelable={!isLoading}
        />
        <View style={styles.view} />
        <View style={styles.absolute}>

          <HomeHeader
            navigation={navigation}
            onNavigateToCartSearch={this.onNavigateToCartSearch}
          />

          <SwiperContainer data={swiperData} />

          <View style={styles.mainContainer}>
            <DealContainer data={dealData} />
          </View>
        </View>
      </View>
    );
  }

  renderFlashSale = () => {
    const { recommendationData } = this.props;
    return (
      <View>
        <LinearGradient
          colors={[COLORS.red, COLORS.lightOrange, COLORS.gray]}
          style={styles.popularContainer}>
          <View style={[styles.header, { marginLeft: 10 }]}>
            <Icon
              name={'ios-flash'}
              color={COLORS.white}
              size={22} />
            <Text style={[styles.title, { color: COLORS.white }]}>FLASH SALE</Text>
            <CountDown
              until={7200}
              size={10}
              onFinish={() => alert('Finished')}
              digitStyle={{ backgroundColor: COLORS.black }}
              digitTxtStyle={{ color: COLORS.white }}
              timeToShow={['H', 'M', 'S']}
            />
          </View>
        </LinearGradient>
        <FlashSaleContainer
          data={recommendationData.slice(0, 10)}
          onNavigateToDetails={this.onNavigateToDetails} />
      </View>
    );
  }

  renderPopularity = () => {
    const { categoryDataLvl2 } = this.props;
    return (
      <View style={styles.popularContainer}>
        <View style={styles.header}>
          <Icon
            name={'ios-flame'}
            color={COLORS.appColor}
            size={22} />
          <Text style={styles.title}>TÌM KIẾM PHỔ BIẾN</Text>
        </View>
        <PopulaContainer
          onNavigationToCateDetails={this.onNavigationToCateDetails}
          data={categoryDataLvl2.slice(0, 10)} />
      </View>
    );
  }

  renderCategory = () => {
    const { categoryDataLvl1 } = this.props;
    return (
      <View style={styles.popularContainer}>
        <View style={styles.header}>
          <Icon
            name={'ios-bookmark'}
            color={COLORS.appColor}
            size={22} />
          <Text style={styles.title}>DANH MỤC</Text>
        </View>
        <CategoryContainer
          onNavigationToMoreCate={this.onNavigationToMoreCate}
          data={categoryDataLvl1}
        />
      </View>
    );
  }

  renderRecommendation = () => {
    const { categoryDataLvl1 } = this.props;
    return (
      <View style={[styles.popularContainer, { paddingLeft: 10 }]}>
        <View style={styles.header}>
          <Icon
            name={'ios-heart'}
            color={COLORS.appColor}
            size={22} />
          <Text style={styles.title}>BỘ SƯU TẬP YÊU THÍCH</Text>
        </View>
        <RecommendContainer
          data={categoryDataLvl1}
          onNavigationToCateDetails={this.onNavigationToCateDetails} />
      </View>
    );
  }

  renderViewedContainer = () => {
    const { viewedProducts } = this.props;
    return (
      <View style={styles.popularContainer}>
        <Text style={styles.title}>SẢN PHẨM VỪA XEM</Text>
        <ViewedContainer
          data={viewedProducts}
          onNavigateToDetails={this.onNavigateToDetails} />
      </View>
    );
  }

  renderProposal = () => {
    const { recommendationData } = this.props;
    return (
      <View>
        <LinearGradient
          colors={[COLORS.red, COLORS.lightOrange]}
          style={[styles.popularContainer, { flexDirection: 'row' }]}>
          <Icon
            name={'ios-star'}
            color={COLORS.yellow}
            size={22} />
          <Text style={[styles.title, { color: COLORS.white }]}>GỢI Ý HÔM NAY</Text>
        </LinearGradient>
        <ProposeContainer
          loadMoreItems={this.loadMoreItems}
          data={shuffle(recommendationData)}
          onNavigateToDetails={this.onNavigateToDetails}
        />
      </View>
    );
  }

  loadMoreItems = () => {
    const { pageNumber } = this.state;
    const { getListItem } = this.props;
    if (pageNumber < 4) {
      this.setState({
        pageNumber: pageNumber + 1
      });
      getListItem(pageNumber + 1);
    }
  }

  onNavigateToDetails = (item, title) => {
    this.props.saveViewedProduct(item);
    this.props.navigation.navigate(ScreenIds.PRODUCT_DETAILS, { item, title });
  }

  onNavigateToCartSearch = () => {
    this.props.navigation.navigate(ScreenIds.SEARCH);
  }

  onNavigationToCateDetails = (id, title, isCateLvl1, isCateLvl2) => {
    this.props.navigation.navigate(ScreenIds.CATEGORY_DETAILS, { id, title, isCateLvl1, isCateLvl2 });
  }

  onNavigationToMoreCate = (id, title) => {
    this.props.navigation.navigate(ScreenIds.MORE_CATEGORY, { id, title });
  }

  render() {

    return (
      <ScrollView showsVerticalScrollIndicator={false}>

        {this.renderHeader()}

        <View style={styles.main}>
          <Image
            source={IMAGES.EXAMPLE_1}
            style={styles.banner}
            resizeMode='stretch'
          />

          <ScrollView horizontal style={{ flexDirection: 'row' }}>
            <Image
              source={IMAGES.EXAMPLE_5}
              style={styles.rowBanner}
              resizeMode='stretch'
            />
            <Image
              source={IMAGES.EXAMPLE_6}
              style={styles.rowBanner}
              resizeMode='stretch'
            />
          </ScrollView>

          {this.renderFlashSale()}
          {this.renderPopularity()}

          <Image
            source={IMAGES.EXAMPLE_2}
            style={styles.banner}
            resizeMode='stretch'
          />

          {this.renderCategory()}

          <Image
            source={IMAGES.EXAMPLE_3}
            style={styles.banner}
            resizeMode='stretch'
          />

          {this.renderRecommendation()}

          {this.renderViewedContainer()}

          <Image
            source={IMAGES.EXAMPLE_4}
            style={styles.banner}
            resizeMode='stretch'
          />

          {this.renderProposal()}
        </View>
      </ScrollView>
    )
  }
}

export default Home;