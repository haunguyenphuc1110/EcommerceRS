import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, Image } from 'react-native';
import { COLORS, IMAGES } from '../../assets';
import styles from './Survey.styles';

import LinearGradient from 'react-native-linear-gradient';
import SurveyItem from '../../components/SurveyItem/SurveyItem.component';

class Survey extends Component {

  state = {
    selected: new Map(),
    visible: false
  }

  checkSelectedItem = (id) => {
    this.setState((state) => {
      const selected = new Map(state.selected);
      let visible = state.visible;
      //remove key if selected, add key if not selected
      this.state.selected.has(id)
        ? selected.delete(id, !selected.get(id))
        : selected.set(id, !selected.get(id));
      if (selected.size === 5){
        visible = true
      }
      return { selected, visible };
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
    const { visible } = this.state;
    const { navigation, categoryDataLvl1 } = this.props;

    return (
      <LinearGradient colors={[COLORS.gray, COLORS.lightGray]} style={styles.main}>
        <Modal
          transparent={true}
          animationType={'none'}
          visible={visible}>
          <View style={styles.container}>
            <View style={styles.background}>
              <Image source={IMAGES.ICON_CHECK}/>
              <Text style={styles.headerTitle}>Cảm ơn bạn đã giúp đỡ</Text>
              <TouchableOpacity 
                onPress={() => {
                  this.setState({visible: false});
                  navigation.goBack();
                }} 
                style={styles.confirm}>
                <Text style={styles.buttonText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <LinearGradient colors={[COLORS.appColor, COLORS.lightOrange]}>
          <Text style={styles.title}>Chọn 5 danh mục mà bạn quan tâm</Text>
        </LinearGradient>
        <FlatList
          numColumns={3}
          data={categoryDataLvl1}
          renderItem={({ item }) => this.renderItem(item)}
          keyExtractor={(item) => item.cate1_id}
          extraData={this.state}
          style={styles.flatlist}
        />
      </LinearGradient>
    );
  }
}

export default Survey;