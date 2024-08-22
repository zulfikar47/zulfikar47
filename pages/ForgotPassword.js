import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const ForgotPassword = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Forgot password</Text>
        <Text style={styles.instruction}>
          Please, enter your email address. You will receive a link to create a new password via email.
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="black"
          keyboardType="email-address"
        />
        <Text style={styles.errorText}>
          Not a valid email address. Should be your@email.com
        </Text>
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>SEND</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00AA13',
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  instruction: {
    fontSize: 14,
    marginBottom: 20,
    color: 'black',
  },
  input: {
    height: 50,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 5,
    color: 'black',
  },
  errorText: {
    fontSize: 11,
    marginBottom: 20,
    color: 'black',
    textAlign: 'center',
  },
  sendButton: {
    backgroundColor: 'white',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  sendButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ForgotPassword;
