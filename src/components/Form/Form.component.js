import React, { Component } from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "./Form.styles";
import { COLORS, IMAGES } from "../../assets";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleFullName = text => {

  }

  handlePhoneNumber = text => {

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

  _logIn = () => {
    // const { onLogin } = this.props;
    // if (this.state.password.length >= 8) {
    //   onLogin(this.state.email, this.state.password);
    // } else {
    //   alert("Password must has at least 8 characters!");
    // }
  };

  render() {
    const { isSignupForm } = this.props;
    return (
      <View style={styles.container}>
        {isSignupForm &&
          <TextInput style={styles.inputBox}
            placeholder="FullName"
            placeholderTextColor={COLORS.black}
            selectionColor={COLORS.black}
            keyboardType="email-address"
            onChangeText={this.handleFullName}
            onSubmitEditing={() => this.phone.focus()}
				  />
        }
  
        {isSignupForm &&
          <TextInput style={styles.inputBox}
            placeholder="Phone Number"
            placeholderTextColor={COLORS.black}
            selectionColor={COLORS.black}
            keyboardType="phone-pad"
            onChangeText={this.handlePhoneNumber}
            onSubmitEditing={() => this.email.focus()}
            ref={(input) => this.phone = input}
          />
        }

        <TextInput
          style={styles.inputBox}
          placeholder="Email"
          placeholderTextColor={COLORS.black}
          selectionColor={COLORS.black}
          keyboardType="email-address"
          onSubmitEditing={() => this.password.focus()}
          onChangeText={this.handleEmail}
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor={COLORS.black}
          onChangeText={this.handlePassword}
          ref={input => (this.password = input)}
        />
        <TouchableOpacity style={styles.button} onPress={this._logIn}>
          <Text style={styles.buttonText}>{this.props.type}</Text>
        </TouchableOpacity>

        {!isSignupForm && <Text style={styles.text}>Quên mật khẩu?</Text>}

        {!isSignupForm && <Text>Hoặc đăng nhập với</Text>}

        {!isSignupForm && <TouchableOpacity style={[styles.button, { backgroundColor: COLORS.facebook }]} onPress={this._logIn}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Image source={IMAGES.FACEBOOK} style={styles.image}/>
              <Text style={styles.buttonText}>Facebook</Text>
            </View>
          </TouchableOpacity>
        }
        {!isSignupForm && <TouchableOpacity style={[styles.button, { backgroundColor: COLORS.white }]} onPress={this._logIn}>
            <View style={styles.group}>
              <Image source={IMAGES.GOOGLE} style={styles.image}/>
              <Text style={[styles.buttonText, { color: COLORS.black }]}>Google</Text>
            </View>
          </TouchableOpacity>
        }
      </View>
    );
  }
}
