import React, { Component } from 'react'
import { 
  Text, 
  View,
  ScrollView,
  Image
} from 'react-native'
import { swiperData, dealData, populariryData } from '../../mocks/dataMock';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { COLORS } from '../../assets';
import LinearGradient from 'react-native-linear-gradient';
import styles from './Home.styles';
import ScreenIds from '../../navigation/screenIds';

import Loading from '../../components/Common/LoadingIndicator/Loading.conponent';
import Header from '../../components/Header/Header.component';
import SwiperContainer from '../../components/SwiperContainer/SwiperContainer.component';
import DealContainer from '../../components/DealContainer/DealContainer.component';
import PopulaContainer from '../../components/PopularContainer/PopularContainer.component';
import CategoryContainer from '../../components/CategoryContainer/CategoryContainer.component';
import ViewedContainer from '../../components/ViewedContainer/ViewedContainer.component';
import RecommendContainer from '../../components/RecommendContainer/RecommendContainer.component';
import ProposeContainer from '../../components/ProposeContainer/ProposeContainer.component';

class Home extends Component {

  constructor(props){
    super(props);
    this.state={
      category:[],
      listItem: [],
      isLoading: true
    }
  }

  componentWillReceiveProps(nextProps){
    const { pending: previousPending } = nextProps;
    const { pending } = this.props;
    if (!pending && pending !== previousPending) {
      this.setState({
        isLoading: false
      })
    }
  }

  componentDidMount(){
    this.props.getListCategory();  
    this.props.getListItem();
  }

  onNavigateToDetails = () => {
    this.props.navigation.navigate(ScreenIds.PRODUCT_DETAILS);
  }

  onNavigateToCart = () => {
    this.props.navigation.navigate(ScreenIds.CART);
  }

  onNavigateToCartSearch = () => {
    this.props.navigation.navigate(ScreenIds.SEARCH);
  }

  render() {
    const { navigation } = this.props;
    const { isLoading } = this.state;

    if (isLoading) {
      return (
        <Loading/>
      )
    }

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header 
          onNavigateToCart={this.onNavigateToCart} 
          onNavigateToCartSearch={this.onNavigateToCartSearch}/>
        <SwiperContainer
          data={swiperData}
          navigation={navigation} 
        />
        <View style={styles.mainContainer}>
          <DealContainer data={dealData}/>
        </View>

        <View style={styles.main}>
          <Image
            source={{
              uri: 'http://media3.scdn.vn/img3/2019/11_4/0mLRBX.png'
            }}
            style={styles.banner}
            resizeMode='stretch'
          />

          <View style={styles.popularContainer}>
            <Text style={styles.title}>Tìm kiếm phổ biến</Text>
            <PopulaContainer data={populariryData}/>
          </View>

          <View style={styles.popularContainer}>
            <Text style={styles.title}>Danh mục</Text>
            <CategoryContainer data={this.props.categoryData}/>
          </View>

          <View style={[styles.popularContainer, { padding: 0 }]}>
            <Text style={[styles.title, {margin: 10}]}>Bộ sưu tập yêu thích</Text>
            <RecommendContainer data={this.props.categoryData}/>
          </View>

          <View style={styles.popularContainer}>
            <Text style={styles.title}>Sản phẩm vừa xem</Text>
            <ViewedContainer data={populariryData}/>
          </View>

          <LinearGradient colors={[COLORS.red, COLORS.lightOrange]} style={styles.popularContainer}>
            <Text style={[styles.title, {color: COLORS.white}]}>Sản phẩm đề cử</Text>
          </LinearGradient> 
          <ProposeContainer data={this.props.recommendationData} onNavigateToDetails={this.onNavigateToDetails}/>       
        </View>
      </ScrollView>
    )
  }
}

export default Home;
