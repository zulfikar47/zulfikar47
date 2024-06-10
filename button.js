import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
      email: '',
      password: '',
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.left}>
            <Text style={styles.time}>{this.state.time}</Text>
          </View>
          <View style={styles.right}>
            <Icon name="signal-cellular-4-bar" size={20} color="#000" />
            <Icon name="wifi" size={20} color="#000" style={styles.icon} />
            <Icon name="battery-full" size={20} color="#000" style={styles.icon} />
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.loginText}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={this.state.email}
            onChangeText={(email) => this.setState({ email })}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
            secureTextEntry
          />
          <View style={styles.forgotPasswordContainer}>
            <Icon name="arrow-back" size={20} color="#000" />
            <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
          </View>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  left: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  icon: {
    marginLeft: 5,
  },
  time: {
    fontSize: 16,
  },
  loginText: {
    fontSize: 30,
    marginTop: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 20,
    paddingLeft: 10,
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  forgotPasswordText: {
    marginLeft: 5,
    fontSize: 16,
    color: '#0000EE',
  },
  loginButton: {
    width: '80%',
    height: 50,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  loginButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Login;
