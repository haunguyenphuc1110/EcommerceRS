import React, { Component } from 'react'
import {
  Text,
  View,
  ScrollView,
  Image
} from 'react-native'
import { swiperData, dealData, populariryData } from '../../mocks/dataMock';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS, IMAGES } from '../../assets';
import LinearGradient from 'react-native-linear-gradient';
import styles from './Home.styles';
import ScreenIds from '../../navigation/screenIds';

import Spinner from '../../components/Common/LoadingIndicator/Loading.conponent';
import Header from '../../components/Header/Header.component';
import CountDown from '../../components/Common/Countdown/Countdown.component';
import SwiperContainer from '../../components/SwiperContainer/SwiperContainer.component';
import DealContainer from '../../components/DealContainer/DealContainer.component';
import PopulaContainer from '../../components/PopularContainer/PopularContainer.component';
import FlashSaleContainer from '../../components/FlashSaleContainer/FlashSaleContainer.component';
import CategoryContainer from '../../components/CategoryContainer/CategoryContainer.component';
import ViewedContainer from '../../components/ViewedContainer/ViewedContainer.component';
import RecommendContainer from '../../components/RecommendContainer/RecommendContainer.component';
import ProposeContainer from '../../components/ProposeContainer/ProposeContainer.component';

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
    this.props.getListItem(this.state.pageNumber);
  }

  loadMoreItems = () => {
    const { pageNumber } = this.state;
    const { getListItem } = this.props;
    this.setState({
      pageNumber: pageNumber + 1 
    });
    getListItem(pageNumber + 1);
  }

  onNavigateToDetails = (item) => {
    this.props.navigation.navigate(ScreenIds.PRODUCT_DETAILS, { item });
  }

  onNavigateToCartSearch = () => {
    this.props.navigation.navigate(ScreenIds.SEARCH);
  }

  onNavigationToCateDetails = (id) => {
    this.props.navigation.navigate(ScreenIds.CATEGORY_DETAILS, { id });
  }

  render() {
    const { navigation } = this.props;
    const { isLoading } = this.state;

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Spinner
          visible={isLoading}
          // textContent={'Loading...'}
          textStyle={{ color: COLORS.white }}
          cancelable={!isLoading}
        />
        <View style={{
          backgroundColor: COLORS.appColor,
          height: 200,
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40
        }}/>
        <View style={styles.absolute}>
          <Header
            navigation={navigation}
            onNavigateToCartSearch={this.onNavigateToCartSearch}
          />
          <SwiperContainer
            data={swiperData}
            navigation={navigation}
          />
          <View style={styles.mainContainer}>
            <DealContainer data={dealData} />
          </View>
        </View>

        <View style={styles.main}>
          <Image
            source={IMAGES.EXAMPLE_1}
            style={styles.banner}
            resizeMode='stretch'
          />

          <LinearGradient colors={[COLORS.red, COLORS.lightOrange, COLORS.gray]} style={styles.popularContainer}>
            <View style={[styles.header, { marginLeft: 10 }]}>
              <Icon
                name={'ios-flash'}
                color={COLORS.white}
                size={22}/>
              <Text style={[styles.title, { color: COLORS.white }]}>FLASH SALE</Text>
              <CountDown
                until={7200}
                size={10}
                onFinish={() => alert('Finished')}
                digitStyle={{backgroundColor: COLORS.black}}
                digitTxtStyle={{color: COLORS.white}}
                timeToShow={['H', 'M', 'S']}
              />
            </View>
          </LinearGradient>
          <FlashSaleContainer data={this.props.recommendationData.slice(0, 10)} />

          <View style={styles.popularContainer}>
            <View style={styles.header}>
              <Icon
                name={'ios-flame'}
                color={COLORS.appColor}
                size={22}/>
              <Text style={styles.title}>TÌM KIẾM PHỔ BIẾN</Text>
            </View>
            <PopulaContainer data={populariryData} />
          </View>

          <Image
            source={IMAGES.EXAMPLE_2}
            style={styles.banner}
            resizeMode='stretch'
          />

          <View style={styles.popularContainer}>
            <View style={styles.header}>
              <Icon
                name={'ios-bookmark'}
                color={COLORS.appColor}
                size={22}/>
              <Text style={styles.title}>DANH MỤC</Text>
            </View>
            <CategoryContainer 
              onNavigationToCateDetails={this.onNavigationToCateDetails} 
              data={this.props.categoryData} 
            />
          </View>

          <Image
            source={IMAGES.EXAMPLE_3}
            style={styles.banner}
            resizeMode='stretch'
          />

          <View style={[styles.popularContainer, { paddingLeft: 10 }]}>
            <View style={styles.header}>
              <Icon
                name={'ios-heart'}
                color={COLORS.appColor}
                size={22}/>
              <Text style={styles.title}>BỘ SƯU TẬP YÊU THÍCH</Text>
            </View>
            <RecommendContainer 
              data={this.props.categoryData} 
              onNavigationToCateDetails={this.onNavigationToCateDetails} />
          </View>



          <View style={styles.popularContainer}>
            <Text style={styles.title}>SẢN PHẨM VỪA XEM</Text>
            <ViewedContainer data={populariryData} />
          </View>

          <Image
            source={IMAGES.EXAMPLE_4}
            style={styles.banner}
            resizeMode='stretch'
          />

          <LinearGradient colors={[COLORS.red, COLORS.lightOrange]} style={[styles.popularContainer, { flexDirection: 'row' }]}>
            <Icon
              name={'ios-star'}
              color={COLORS.yellow}
              size={22}/>
            <Text style={[styles.title, { color: COLORS.white }]}>GỢI Ý HÔM NAY</Text>
          </LinearGradient>
          <ProposeContainer
            loadMoreItems={this.loadMoreItems}
            data={this.props.recommendationData} 
            onNavigateToDetails={this.onNavigateToDetails} 
          />
        </View>
      </ScrollView>
    )
  }
}

export default Home;
