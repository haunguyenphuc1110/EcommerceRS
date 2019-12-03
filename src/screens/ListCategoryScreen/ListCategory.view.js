import React, { Component } from 'react';
import { 
  Text, 
  View, 
  ScrollView, 
  ImageBackground, 
  TouchableWithoutFeedback,
  FlatList 
} from 'react-native';
import styles from './ListCategory.styles';

import ScreenIds from '../../navigation/screenIds';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS, IMAGES } from '../../assets';

import Spinner from '../../components/Common/LoadingIndicator/Loading.conponent';

class ListCategory extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      id: props.navigation.getParam('id', '')
    }
  }

  componentWillReceiveProps(nextProps) {
    const { pending } = nextProps;
    const { pending: previousPending } = this.props;
    if (!pending && pending !== previousPending) {
      this.setState({
        isLoading: false
      })
    }
  }

  componentDidMount() {
    const { id } = this.state;
    this.props.getListCategoryLvl3ByCategoryLvl2(id);
  }

  renderItem = (item) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => this.onNavigationToCateDetails(item.cate3_id, item.cate3_name, true)}>
        <View style={styles.item}>
          <ImageBackground
            source={IMAGES.PRODUCT}
            style={styles.imgBackground}
            imageStyle={{ borderRadius: 10 }}
            resizeMode={'contain'}
          >
            <View style={styles.imageContainer}>
              <Text style={styles.text}>{item.cate3_name}</Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  onNavigationToCateDetails = (id, title, isCateLvl3) => {
    this.props.navigation.navigate(ScreenIds.CATEGORY_DETAILS, { id, title, isCateLvl3 });
  }

  render() {
    const { isLoading } = this.state;
    const {
      listCategoryLvl3
    } = this.props;
    return (
      <ScrollView contentContainerStyle={{ backgroundColor: COLORS.lightGray }} showsVerticalScrollIndicator={false}>
        <Spinner
          visible={isLoading}
          textStyle={{ color: COLORS.white }}
          cancelable={!isLoading}
          overlayColor={COLORS.white}
          color={COLORS.darkGray}
        />

        <View style={[styles.popularContainer, { paddingLeft: 10 }]}>
          <View style={styles.header}>
            <Icon
              name={'ios-medal'}
              color={COLORS.appColor}
              size={22} />
            <Text style={styles.title}>DANH MỤC HIỆN CÓ</Text>
          </View>
          <View style={styles.flatlist}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              numColumns={2}
              data={listCategoryLvl3}
              renderItem={({ item }) => this.renderItem(item)}
              keyExtractor={item => item.cate3_id}
            />
          </View>
        </View>
      </ScrollView>
    )
  }
}

export default ListCategory;
