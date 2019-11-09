import React from 'react';
import { View, Modal, ActivityIndicator } from 'react-native';
import styles from './ModalLoading.styles';
const ModalLoading = () => (
  <Modal
    transparent={true}
    animationType={'none'}
    visible={true}>
    <View style={styles.modalBackground}>
      <View style={styles.activityIndicatorWrapper}>
        <ActivityIndicator />
      </View>
    </View>
  </Modal>
);
export default ModalLoading;