import React from 'react';
import { View, ScrollView, KeyboardAvoidingView, Dimensions } from 'react-native';
import styles from './Thread.styles';
import { IMAGES } from '../../assets';

import ProductPartial from '../../components/ProductPartial/ProductPartial.component';
import MessageBubble from '../../components/MessageBubble/MessageBubble.component';
import ChatInput from '../../components/ChatInput/ChatInput.component';

const { height } = Dimensions.get('window');
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.scrollView = React.createRef();
  }

  scrollToEnd = () => {
    this.scrollView.current.scrollToEnd();
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.productContainer}>
          <ProductPartial
            image={{
              uri:
                'https://i.pinimg.com/564x/83/58/f8/8358f80257b84f985f9493ebd9ad60e1.jpg'
            }}
            name='Wooden Clock'
            price={49}
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
              text='Hey, thanks for the interest in my drone.What would you like to know?'
              incoming
              avatar={IMAGES.AVATAR}
            />
            <MessageBubble
              timeAgo='24m ago'
              text='Nice meeting you, Keith. I’m interested and would love to know more about the drone. Is it still under warranty? Do you have the bills and stuff?'
              readReceipt
              avatar={IMAGES.AVATAR}
            />
            <MessageBubble
              timeAgo='24m ago'
              text='For sure, my man. I do have them all.  It was bought last year, 24th Mar and still has warranty.'
              incoming
              avatar={IMAGES.AVATAR}
            />
            <MessageBubble
              timeAgo='24m ago'
              text='Awesome. Would you accept 40k? I’m ready to purchase it.'
              avatar={IMAGES.AVATAR}
            />
            <MessageBubble
              timeAgo='24m ago'
              text='Awesome. Would you accept 40k? I’m ready to purchase it.'
              incoming
              avatar={IMAGES.AVATAR}
            />
            <MessageBubble
              timeAgo='24m ago'
              text='Awesome. Would you accept 40k? I’m ready to purchase it.'
              avatar={IMAGES.AVATAR}
            />
            <MessageBubble
              timeAgo='24m ago'
              text='Awesome. Would you accept 40k? I’m ready to purchase it.'
              incoming
              avatar={IMAGES.AVATAR}
            />
            <MessageBubble
              timeAgo='24m ago'
              text='Awesome. Would you accept 40k? I’m ready to purchase it.'
              avatar={IMAGES.AVATAR}
            />
            <MessageBubble
              timeAgo='24m ago'
              text='Awesome. Would you accept 40k? I’m ready to purchase it.'
              incoming
              avatar={IMAGES.AVATAR}
            />
            <MessageBubble
              timeAgo='24m ago'
              text='Awesome. Would you accept 40k? I’m ready to purchase it.'
              avatar={IMAGES.AVATAR}
            />
          </ScrollView>
          <ChatInput/>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
