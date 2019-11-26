import React, { Component } from 'react';
import { View, Alert, ScrollView, TouchableOpacity, Text } from 'react-native';
import styles from './Bill.styles';

import ScreenIds from'../../navigation/screenIds';

import ItemContainer from '../../components/BillContainer/ItemContainer/ItemContainer.component';
import Title from '../../components/PaymentContainer/Title/Title.component';
import ContactContainer from '../../components/BillContainer/ContactContainer/ContactContainer.component';
import TotalContainer from '../../components/PaymentContainer/TotalContainer/TotalContainer.component';

class Bill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  // componentWillReceiveProps(nextProps) {
  //   const { navigation, isPlaceOrderError, isPlaceOrderSuccess } = nextProps;
  //   if (
  //     isPlaceOrderSuccess !== this.props.isPlaceOrderSuccess &&
  //     isPlaceOrderSuccess
  //   ) {
  //     Alert.alert('Notification', 'Order successfully! Thank you!', [
  //       {
  //         text: 'Ok'
  //       }
  //     ]);
  //     navigation.navigate(Navigations.HOME);
  //   }
  //   if (
  //     isPlaceOrderError !== this.props.isPlaceOrderError &&
  //     isPlaceOrderError
  //   ) {
  //     Alert.alert('Notification', 'Order fail! Try again', [
  //       {
  //         text: 'Ok'
  //       }
  //     ]);
  //   }
  // }

  onProceedToPlaceOrder = () => {
    const {
      navigation
    } = this.props;
    // const { address } = this.state;
    navigation.navigate(ScreenIds.HOME);
  };

  placeOrder = () => {
    Alert.alert('Place Order', 'Are you sure?', [
      {
        text: 'Cancel',
        style: 'cancel'
      },
      { text: 'OK', onPress: this.onProceedToPlaceOrder }
    ]);
  };

  render() {
    const { cartData, navigation } = this.props;
    const data = navigation.getParam('data', {});
    // const { address, name, phone, paymentMethod } = this.state;
    return (
      <View style={styles.container}>
        {/* {isPlaceOrderPending && <ModalLoading />} */}
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
          <View style={styles.subContainer}>
            <Title index={'1'} title={'Contact Info'} />
            <ContactContainer data={data}/>
          </View>

          <View style={styles.subContainer}>
            <Title index={'2'} title={'Your Order'} />
            <ItemContainer data={cartData} />
          </View>
        </ScrollView>
        <TotalContainer/>
        <TouchableOpacity style={styles.button} onPress={this.placeOrder}>
          <Text style={styles.textButton}>Xác nhận</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Bill;
