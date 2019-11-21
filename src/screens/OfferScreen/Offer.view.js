import React from 'react';
import {
  View,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import styles from './Offer.styles';
import { offerData } from '../../mocks/dataMock';
import ScreenIds from '../../navigation/screenIds';

import Header from '../../components/Header/Header.component';

const renderHeader = navigation => {
  return (
    <Header 
      navigation={navigation} 
      onNavigateToCartSearch={() => onNavigateToCartSearch(navigation)}
    />
  );
}

const renderOfferSection = () => {
  return (
    <View style={styles.flatList}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={offerData}
        renderItem={renderOfferItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const renderOfferItem = ({ item }) => {
  return (
    <Image
      style={styles.image}
      source={{ uri: item.image }}
      resizeMode='stretch'
    />
  );
}

const onNavigateToCartSearch = (navigation) => {
  navigation.navigate(ScreenIds.SEARCH);
}

const Offer = (props) => {
  const { navigation } = props;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {renderHeader(navigation)}
      {renderOfferSection()}
    </ScrollView>
  );
}

export default Offer;