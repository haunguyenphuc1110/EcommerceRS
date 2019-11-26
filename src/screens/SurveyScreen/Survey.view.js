import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import { surveyData } from '../../mocks/dataMock'
import { COLORS } from '../../assets';
import styles from './Survey.styles';

import LinearGradient from 'react-native-linear-gradient';
import SurveyItem from '../../components/SurveyItem/SurveyItem.component';

class Survey extends Component {

  state = {
    selected: new Map()
  }

  checkSelectedItem = (id) => {
    this.setState((state) => {
      const selected = new Map(state.selected);
      //remove key if selected, add key if not selected
      this.state.selected.has(id) ? selected.delete(id, !selected.get(id)) : selected.set(id, !selected.get(id));
      return {selected};
    });
  }

  renderItem = (item) => {
    return (
      <SurveyItem
        item={item}
        checkSelectedItem={this.checkSelectedItem}
        isSelected={!!this.state.selected.get(item.belong_cate_lvl1_id)}
      />
    );
  }

  render() {
    console.log(this.state);
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
          extraData={this.state}
          style={styles.flatlist}
        />
      </LinearGradient>
    );
  }
}

export default Survey;