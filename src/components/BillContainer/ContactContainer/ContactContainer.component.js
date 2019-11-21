import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './ContactContainer.styles';

const ContactContainer = props => {
  const { name, phone, address, paymentMethod } = props.data;
  return (
    <View style={styles.contactContainer}>
      <Text style={styles.contactTitle}>NAME</Text>
      <Text style={styles.contactContent}>{name}</Text>
      <Text style={styles.contactTitle}>PHONE</Text>
      <Text style={styles.contactContent}>{phone}</Text>
      <Text style={styles.contactTitle}>ADDRESS</Text>
      <Text style={styles.contactContent}>{address}</Text>
      <Text style={styles.contactTitle}>PAYMENT METHOD</Text>
      <Text style={styles.contactContent}>{paymentMethod}</Text>
    </View>
  );
}
export default ContactContainer;