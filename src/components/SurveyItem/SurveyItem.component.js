import React from 'react';
import { TouchableOpacity, ImageBackground, View, Text } from 'react-native';
import styles from './SurveyItem.styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { COLORS } from '../../assets';

const SurveyItem = (props) => {
  const { item, isSelected, checkSelectedItem } = props
  const id = item.belong_cate_lvl1_id;
  return (
    <TouchableOpacity style={styles.imgContainer} onPress={() => checkSelectedItem(id)}>
      <ImageBackground
        source={{ uri: item.imageUrl }}
        style={styles.image}
        imageStyle={{ borderRadius: 50 }}>
        {isSelected
          &&
          <View style={styles.iconWrapper}>
            <Icon name={"check"} color={COLORS.white} size={20} />
          </View>
        }
      </ImageBackground>
      <Text style={styles.name}>
        {item.belong_cate_lvl1_name}
      </Text>
    </TouchableOpacity>
  );
}
export default SurveyItem;