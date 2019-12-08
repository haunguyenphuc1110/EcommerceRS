import React, { Component } from 'react';
import { 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  KeyboardAvoidingView 
} from 'react-native';
import styles from './Form.styles';
import { COLORS, IMAGES } from '../../assets';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleEmail = text => {
    this.setState({
      email: text
    });
  };

  handlePassword = text => {
    this.setState({
      password: text
    });
  };


  render() {
    const { isSignupForm, onLoginNormal, onLoginFacebook } = this.props;
    const { email, password } = this.state;
    return (
      <KeyboardAvoidingView behavior="padding">

        <View style={styles.container}>
          <TextInput
            style={styles.inputBox}
            placeholder='Tên đăng nhập'
            placeholderTextColor={COLORS.black}
            selectionColor={COLORS.black}
            keyboardType='email-address'
            onSubmitEditing={() => this.password.focus()}
            onChangeText={this.handleEmail}
            ref={(input) => this.email = input}
            autoCapitalize='none'
          />
          <TextInput
            style={styles.inputBox}
            placeholder='Mật khẩu'
            secureTextEntry={true}
            placeholderTextColor={COLORS.black}
            onChangeText={this.handlePassword}
            ref={input => this.password = input}
            autoCapitalize='none'
          />
          <TouchableOpacity style={styles.button} onPress={() => onLoginNormal(email, password)}>
            <Text style={styles.buttonText}>{this.props.type}</Text>
          </TouchableOpacity>

          {!isSignupForm && <Text style={styles.text}>Quên mật khẩu?</Text>}

          {!isSignupForm && <Text>Hoặc đăng nhập với</Text>}

          {!isSignupForm && 
            (<TouchableOpacity style={[styles.button, { backgroundColor: COLORS.facebook }]} onPress={onLoginFacebook}>
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={IMAGES.FACEBOOK} style={styles.image}/>
                <Text style={styles.buttonText}>Facebook</Text>
              </View>
            </TouchableOpacity>)
          }
          {!isSignupForm && 
            (<TouchableOpacity style={[styles.button, { backgroundColor: COLORS.white }]}>
              <View style={styles.group}>
                <Image source={IMAGES.GOOGLE} style={styles.image}/>
                <Text style={[styles.buttonText, { color: COLORS.black }]}>Google</Text>
              </View>
            </TouchableOpacity>)
          }
        </View>
      </KeyboardAvoidingView>
    );
  }
}
