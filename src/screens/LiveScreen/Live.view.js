import React from 'react';
import {
  View,
  Image,
  ScrollView
} from 'react-native';
import styles from './Live.styles';
import { liveData } from '../../mocks/dataMock';
import ScreenIds from '../../navigation/screenIds';
import { IMAGES } from '../../assets';

import Header from '../../components/Header/Header.component';
import LiveContainer from '../../components/LiveContainer/LiveContainer.component';

const onNavigateToSearch = (navigation) => {
  navigation.navigate(ScreenIds.SEARCH);
}

const renderHeader = navigation => {
  return (
    <View>
      <Header
        navigation={navigation}
        onNavigateToSearch={onNavigateToSearch}
      />
      <Image source={IMAGES.LIVE_BANNER} style={styles.image} resizeMode={"stretch"} />
    </View>
  );
}

const renderLiveSection = () => {
  return (
    <LiveContainer liveData={liveData}/>
  );
}

const Live = (props) => {
  const { navigation } = props;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {renderHeader(navigation)}
      {renderLiveSection()}
    </ScrollView>
  );
}

export default Live;