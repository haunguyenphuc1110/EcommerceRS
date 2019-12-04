import React from 'react';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import styles from './Thread.styles';
import { IMAGES } from '../../assets';

import ProductPartial from '../../components/ProductPartial/ProductPartial.component';
import MessageBubble from '../../components/MessageBubble/MessageBubble.component';
import ChatInput from '../../components/ChatInput/ChatInput.component';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.scrollView = React.createRef();
  }

  scrollToEnd = () => {
    this.scrollView.current.scrollToEnd();
  };

  render() {
    const item = this.props.navigation.getParam('item', {});
    return (
      <View style={styles.container}>
        <View style={styles.productContainer}>
          <ProductPartial
            image={item.uri}
            name={item.product_name}
            price={item.price}
          />
        </View>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior='padding' keyboardVerticalOffset={-300}>
          <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={styles.scroll}
            onContentSizeChange={this.scrollToEnd}
            ref={this.scrollView}
          >
            <MessageBubble
              timeAgo='24m ago'
              text='Hi, cảm ơn đã quan tâm đến sản phẩm của shop. Bạn có cần giải đáp gì không?'
              incoming
              avatar={IMAGES.AVATAR}
            />
            <MessageBubble
              timeAgo='24m ago'
              text='Rất vui được gặp bạn. Mình rất thích sản phẩm này vì màu sắc và chất liệu của nó quá tuyệt vời. Mình có thể biết thêm chi tiết thông tin sản phẩm được không?'
              readReceipt
              avatar={IMAGES.AVATAR}
            />
            <MessageBubble
              timeAgo='24m ago'
              text='Dĩ nhiên rồi bạn. Sản phẩm bên mình 100% y hình, được bảo hành đầy đủ nên bạn yên tâm về chất lượng.'
              incoming
              avatar={IMAGES.AVATAR}
            />
            <MessageBubble
              timeAgo='24m ago'
              text='Tuyệt. Okie mình sẽ thêm sản phẩm này vào giỏ hàng và thanh toán nó ngay ạ.'
              readReceipt
              avatar={IMAGES.AVATAR}
            />
            <MessageBubble
              timeAgo='24m ago'
              text='Tuyệt. Okie mình sẽ thêm sản phẩm này vào giỏ hàng và thanh toán nó ngay ạ.'
              incoming
              avatar={IMAGES.AVATAR}
            />
            <MessageBubble
              timeAgo='24m ago'
              text='Tuyệt. Okie mình sẽ thêm sản phẩm này vào giỏ hàng và thanh toán nó ngay ạ.'
              readReceipt
              avatar={IMAGES.AVATAR}
            />
            <MessageBubble
              timeAgo='24m ago'
              text='Tuyệt. Okie mình sẽ thêm sản phẩm này vào giỏ hàng và thanh toán nó ngay ạ.'
              incoming
              avatar={IMAGES.AVATAR}
            />
            <MessageBubble
              timeAgo='24m ago'
              text='Tuyệt. Okie mình sẽ thêm sản phẩm này vào giỏ hàng và thanh toán nó ngay ạ.'
              readReceipt
              avatar={IMAGES.AVATAR}
            />
            <MessageBubble
              timeAgo='24m ago'
              text='Tuyệt. Okie mình sẽ thêm sản phẩm này vào giỏ hàng và thanh toán nó ngay ạ.'
              incoming
              avatar={IMAGES.AVATAR}
            />
            <MessageBubble
              timeAgo='24m ago'
              text='Tuyệt. Okie mình sẽ thêm sản phẩm này vào giỏ hàng và thanh toán nó ngay ạ.'
              readReceipt
              avatar={IMAGES.AVATAR}
            />
          </ScrollView>
          <ChatInput />
        </KeyboardAvoidingView>
      </View>
    );
  }
}
