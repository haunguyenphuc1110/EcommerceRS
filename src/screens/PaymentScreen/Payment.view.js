import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import styles from './Payment.styles';

import ScreenIds from'../../navigation/screenIds';

import TotalContainer from '../../components/PaymentContainer/TotalContainer/TotalContainer.component';
import Title from '../../components/PaymentContainer/Title/Title.component';
import ContactInfo from '../../components/PaymentContainer/ContactInfo/ContactInfo.component';
import DeliveryAddress from '../../components/PaymentContainer/DeliveryAddress/DeliveryAddress.component';
import PaymentMethod from '../../components/PaymentContainer/PaymentMethod/PaymentMethod.component';

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      houseNumber: '',
      street: '',
      city: '',
      district: '',
      ward: props.ward,
      paymentMethod: 'cash',
      showCheckCash: true,
      showCheckVisa: false,
      showCheckMastercard: false
    };
  }

  onProceedToConfirm = () => {
    const {
      phone,
      name,
      paymentMethod,
      houseNumber,
      street,
      ward,
      district,
      city
    } = this.state;
    let address = houseNumber + ", " + street + ", " + ward + ", " + district + ", " + city;
    this.props.navigation.navigate(ScreenIds.BILL, {
      data: {
        name,
        phone,
        address,
        paymentMethod
      }
    });
  };

  handleMultiInput = (text, name) => {
    this.setState({ 
      [name]: text 
    });
  }

  onChooseCash = () => {
    this.setState({
      showCheckCash: true,
      showCheckVisa: false,
      showCheckMastercard: false,
      paymentMethod: 'cash'
    });
  };

  onChooseVisa = () => {
    this.setState({
      showCheckCash: false,
      showCheckVisa: true,
      showCheckMastercard: false,
      paymentMethod: 'visa'
    });
  };

  onChooseMastercard = () => {
    this.setState({
      showCheckCash: false,
      showCheckVisa: false,
      showCheckMastercard: true,
      paymentMethod: 'mastercard'
    });
  };

  render() {
    const {
      name,
      phone,
      city,
      district,
      ward,
      street,
      houseNumber,
      showCheckCash,
      showCheckMastercard,
      showCheckVisa
    } = this.state;
    return (
      <View style={styles.container}>
        <TotalContainer/>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
          <View style={styles.subContainer}>
            <Title index={'1'} title={'Thông tin liên hệ'} />
            <ContactInfo
              name={name}
              phone={phone}
              handleInput={this.handleMultiInput} />
          </View>

          <View style={styles.subContainer}>
            <Title index={'2'} title={'Địa chỉ giao hàng'} />
            <DeliveryAddress
              city={city}
              district={district}
              ward={ward}
              street={street}
              houseNumber={houseNumber}
              handleInput={this.handleMultiInput}/>
          </View>

          <View style={[styles.subContainer]}>
            <Title index={'3'} title={'Hình thức thanh toán'} />
            <PaymentMethod
              onChooseCash={this.onChooseCash}
              onChooseMastercard={this.onChooseMastercard}
              onChooseVisa={this.onChooseVisa}
              showCheckCash={showCheckCash}
              showCheckMastercard={showCheckMastercard}
              showCheckVisa={showCheckVisa}
            />
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.button} onPress={this.onProceedToConfirm}>
          <Text style={styles.textButton}>Đặt hàng</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Payment;
