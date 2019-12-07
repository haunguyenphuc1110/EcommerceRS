import React from 'react';
import { 
  TouchableWithoutFeedback, 
  View, 
  ImageBackground,
  Text,
  Image
 } from 'react-native';
import styles from './LiveItem.styles';
import { COLORS, IMAGES } from '../../../assets';

import Icon from 'react-native-vector-icons/FontAwesome5';

const LiveItem = (props) => {
  const { item } = props;
  return (
    <TouchableWithoutFeedback>
      <View style={styles.item}>
        <ImageBackground
          source={{ uri: item.image }}
          style={styles.imgBackground}
          imageStyle={{ borderRadius: 10 }}
          resizeMode={'stretch'}
        >
          <View style={styles.imageContainer}>
            <View style={styles.liveContainer}>
              <View style={styles.live}>
                <View style={styles.dot}></View>
                <Text style={styles.liveText}>LIVE</Text>
              </View>
              <View style={styles.view}>
                <Icon name="eye" size={10} color={COLORS.white}/>
                <Text style={styles.viewText}>{item.view}</Text>
              </View>
            </View>
            <Text style={styles.title}>{item.title}</Text>
            <View style={{ flexDirection: 'row' }}>
              <Image source={IMAGES.ICON_APP} style={styles.avatar}/>
              <Text style={styles.name}>5SIN</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default LiveItem;