import React from 'react';
import Swiper from 'react-native-swiper';
import SwiperItem from './SwiperItem/SwiperItem.component';
import { COLORS } from '../../assets';
import styles from './SwiperContainer.styles';

const onPressImageSwiperDetail = (item, navigation) => {
  
}

const renderItemSwiper = (swipers, navigation) => {
  return swipers.map(item => {
    return <SwiperItem
      key={item.id}
      item={item}
      navigation={navigation}
      onPressImageSwiperDetail={onPressImageSwiperDetail} />
  })
}

const SwiperContainer = props => {
  try {
    const { data, navigation } = props;
    return (
      <Swiper
        style={styles.swiper}
        height={200}
        showsPagination={true}
        activeDotColor={COLORS.red}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        autoplay={true}
        autoplayTimeout={10}
      >
        {renderItemSwiper(data, navigation)}
      </Swiper>
    );
  }
  catch (error) {

  }
  return null;
}
export default SwiperContainer;