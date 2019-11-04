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

import SwiperContainer from '../../components/SwiperContainer/SwiperContainer.component';
import DealContainer from '../../components/DealContainer/DealContainer.component';
import PopulaContainer from '../../components/PopularContainer/PopularContainer.component';
import CategoryContainer from '../../components/CategoryContainer/CategoryContainer.component';
import RecommendContainer from '../../components/RecommendContainer/RecommendContainer.component';
import ProposeContainer from '../../components/ProposeContainer/ProposeContainer.component';

class Home extends Component {

  constructor(props){
    super(props);
    this.state={
      category:[],
      listItem: []
    }
  }

  componentDidMount(){
    this.props.getListCategory();  
    this.props.getListItem();
  }

  render() {
    const { navigation } = this.props;
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
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
              uri: 'https://shoppinglist.vn/wp-content/uploads/2019/01/4.-ma-giam-gia-sendo-5-779x373.png'
            }}
            style={styles.banner}
            resizeMode='stretch'
          />

          <View style={styles.popularContainer}>
            <Text style={styles.title}>Xu hướng tìm kiếm</Text>
            <PopulaContainer data={populariryData}/>
          </View>

          <View style={styles.popularContainer}>
            <Text style={styles.title}>Danh mục</Text>
            <CategoryContainer data={this.props.categoryData}/>
          </View>

          <View style={[styles.popularContainer, { padding: 0 }]}>
            <Text style={[styles.title, {margin: 10}]}>Đề cử cho bạn</Text>
            <RecommendContainer data={this.props.categoryData}/>
          </View>

          <View style={styles.popularContainer}>
            <Text style={styles.title}>Sản phẩm vừa xem</Text>
            <PopulaContainer data={populariryData}/>
          </View>

          <LinearGradient colors={[COLORS.red, COLORS.lightOrange]} style={styles.popularContainer}>
            <Text style={[styles.title, {color: COLORS.white}]}>Sản phẩm đề cử</Text>
          </LinearGradient> 
          <ProposeContainer data={this.props.recommendationData}/>       
        </View>
      </ScrollView>
    )
  }
}
export default Home;
