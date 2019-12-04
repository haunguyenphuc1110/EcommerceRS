import React from 'react';
import { View, Modal } from 'react-native';
import styles from './ModalLoading.styles';

import NetConnection from '../NetConnection/NetConnection.component';

const ModalLoading = (props) => (
  <Modal
    transparent={false}
    animationType={'none'}
    visible={props.visible}>
    <View style={styles.modalBackground}>
      <NetConnection onPress={props.onRetry}/>
    </View>
  </Modal>
);
export default ModalLoading;