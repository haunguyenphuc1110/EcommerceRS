import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import { surveyData } from '../../mocks/dataMock'
import { COLORS } from '../../assets';
import styles from './Survey.styles';

import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';



class Survey extends Component {

  renderItem = (item) => {
    return (
      <TouchableOpacity style={styles.imgContainer} onPress={() => alert('hello')}>
        <ImageBackground
          source={{ uri: item.imageUrl }}
          style={styles.image}
          imageStyle={{ borderRadius: 50 }}>
          <View style={styles.iconWrapper}>
            <Icon name={"check"} color={COLORS.white} size={20} />
          </View>
        </ImageBackground>
        <Text style={styles.name}>
          {item.belong_cate_lvl1_name}
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <LinearGradient colors={[COLORS.gray, COLORS.lightGray]} style={{ flex: 1 }}>
        <LinearGradient colors={[COLORS.appColor, COLORS.lightOrange]}>
          <Text style={styles.title}>Chọn 5 danh mục mà bạn quan tâm</Text>
        </LinearGradient>
        <FlatList
          numColumns={3}
          data={surveyData}
          renderItem={({ item }) => this.renderItem(item)}
          keyExtractor={(item) => item.belong_cate_lvl1_id}
          style={styles.flatlist}
        />
      </LinearGradient>
    );
  }
}

export default Survey;