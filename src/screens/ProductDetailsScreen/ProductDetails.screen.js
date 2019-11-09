import React from 'react';
import { TouchableOpacity, View, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ProductDetails from './ProductDetails.view';

export default class extends React.Component {
  static navigationOptions = {
    title: 'Chi tiết sản phẩm',
    headerTransparent: true,
    headerRight: (
      <TouchableOpacity>
        <View
          style={{
            ...Platform.select({ ios: { heigth: 45 } }),
            justifyContent: 'center',
            paddingLeft: 20
          }}
        >
          <Icon
            name={Platform.OS === 'ios' ? 'ios-heart-empty' : 'md-heart-empty'}
            size={Platform.OS === 'ios' ? 26 : 20}
            color='white'
          />
        </View>
      </TouchableOpacity>
    ),
    headerRightContainerStyle: {
      ...Platform.select({
        ios: {
          paddingRight: 9,
          paddingVertical: 12
        },
        android: {
          paddingRight: 20,
          paddingVertical: 12
        }
      })
    }
  };

  render() {
    return <ProductDetails />;
  }
}
