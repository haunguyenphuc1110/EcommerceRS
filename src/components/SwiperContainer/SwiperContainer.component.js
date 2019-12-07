import React from 'react';
import Swiper from 'react-native-swiper';
import SwiperItem from './SwiperItem/SwiperItem.component';
import { COLORS } from '../../assets';
import styles from './SwiperContainer.styles';

const renderItemSwiper = (swipers) => {
  return swipers.map(item => {
    return <SwiperItem
      key={item.id}
      item={item}
      />
  })
}

const SwiperContainer = props => {
  try {
    const { data } = props;
    return (
      <Swiper
        style={styles.swiper}
        height={150}
        showsPagination={true}
        activeDotColor={COLORS.red}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        autoplay={true}
        autoplayTimeout={10}
      >
        {renderItemSwiper(data)}
      </Swiper>
    );
  }
  catch (error) {

  }
  return null;
}
export default SwiperContainer;