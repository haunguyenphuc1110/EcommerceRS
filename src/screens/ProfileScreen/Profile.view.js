import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
// import ProfileDetail from '../ProfileDetail';
import styles from './Profile.styles';
// import { Colors } from '../../../constants';
// import { getCustomerInfo } from '../../../mocks/configureMockApi';
// import { logoutAccount, clearCart, clearInfo, saveInfo, saveHistoryOrder } from '../../store/actions';
import { IMAGES } from '../../assets';
class Profile extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     loadedAllData: false,
  //   };
  // }

  // async componentDidMount() {
  //   const { token, customerId } = this.props;
  //   await this.dispatchCustomerDataToStore(token, customerId);
  // }

  // async componentWillReceiveProps(nextProps) {
  //   const { token, customerId, email } = nextProps;
  //   if (token !== this.props.token || customerId !== this.props.token || email !== this.props.email){
  //     await this.dispatchCustomerDataToStore(token, customerId);
  //   }
    
  // }

  // dispatchCustomerDataToStore = async (token, customerId) => {
  //   try {
  //     const { onSaveInfo, onSaveHistoryOrder } = this.props;
  //     const result = await getCustomerInfo(token, customerId);
  //     const jsonResponse = await result.json();
  //     if (result.ok) {
  //       this.setState({
  //         loadedAllData: true
  //       })
  //       onSaveInfo(jsonResponse.name, jsonResponse.email, jsonResponse.phoneNumber);
  //       onSaveHistoryOrder(jsonResponse.historyOrders);
  //     }
  //     else {
  //       this.setState({
  //         loadedAllData: true
  //       });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     this.setState({
  //       loadedAllData: true
  //     });
  //   }
  // }

  render() {
    const { navigation } = this.props;
    // if ( !this.state.loadedAllData ) {
    //   return (
    //     <View style={styles.actiIndicator}>
    //       <ActivityIndicator />
    //       <TouchableOpacity style={styles.buttonRefresh} onPress={this.dispatchCustomerDataToStore}>
    //         <Text style={{ color: Colors.white }}>Refresh</Text>
    //       </TouchableOpacity>
    //     </View>
    //   )
    // }

    return (
      <View style={{ flex: 1 }}>
        {/* {
          (token !== '') &&
          <View style={{ flex: 1 }}>
            <ProfileDetail navigation={navigation} {...this.props}/>
          </View>
        } */}
        {
          (true) &&
          <View style={styles.container}>
            <Image source={IMAGES.USER_ACCOUNT} />
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>Login your account</Text>
            </TouchableOpacity>
          </View>
        }
      </View>

    );
  }
}
export default Profile;
