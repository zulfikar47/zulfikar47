import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp = () => {
  const [fontsLoaded] = useFonts({
    'Metropolis-Bold': require('../assets/fonts/Metropolis-Bold.otf'),
    'Metropolis-Medium': require('../assets/fonts/Metropolis-Medium.otf'),
  });

  const [formSignUp, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });

  const navigation = useNavigation();

  const onSubmit = async () => {
    if (formSignUp.name && formSignUp.email && formSignUp.password) {
      try {
        await AsyncStorage.setItem('user', JSON.stringify({
          name: formSignUp.name,
          email: formSignUp.email,
          password: formSignUp.password
        }));
        alert('Sign Up Berhasil');
        navigation.navigate('Login');
        checkStoredData();
      } catch (error) {
        alert('Terjadi kesalahan saat menyimpan data: ' + error.message);
      }
    } else {
      alert('Sign Up Gagal', 'Semua field harus diisi');
    }
  };

  const checkStoredData = async () => {
    try {
      const userData = await AsyncStorage.getItem('user');
      console.log('Data pengguna yang tersimpan:', userData);
    } catch (error) {
      console.error('Gagal mengambil data: ' + error.message);
    }
  };

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Font tidak ditemukan!</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={[styles.title, { fontFamily: 'Metropolis-Bold' }]}>Sign Up</Text>

        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            onChangeText={(text) => setForm({ ...formSignUp, name: text })}
            value={formSignUp.name}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(text) => setForm({ ...formSignUp, email: text })}
            value={formSignUp.email}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => setForm({ ...formSignUp, password: text })}
            value={formSignUp.password}
          />
        </View>

        <TouchableOpacity style={styles.signUpButton} onPress={onSubmit}>
          <Text style={styles.signUpButtonText}>SIGN UP</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkContainer} onPress={() => navigation.navigate("Login")}>
          <Text style={[styles.linkText, { fontFamily: 'Metropolis-Medium' }]}>Already have an account?</Text>
        </TouchableOpacity>

        <Text style={[styles.orText, { fontFamily: 'Metropolis-Medium' }]}>Or sign up with social account</Text>

        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../assets/google.png')} style={styles.socialButtonIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../assets/facebook.png')} style={styles.socialButtonIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#00AA13',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 36,
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
  },
  formContainer: {
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 18,
    marginBottom: 10,
    color: 'black',
  },
  signUpButton: {
    backgroundColor: 'white',
    paddingVertical: 15,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  signUpButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  linkText: {
    color: 'black',
    fontSize: 14,
  },
  orText: {
    fontSize: 14,
    textAlign: 'center',
    color: 'black',
    marginBottom: 10,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
    alignItems: 'center',
    width: 50,
    height: 50,
    justifyContent: 'center',
  },
  socialButtonIcon: {
    width: 30,
    height: 30,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 20,
    color: 'red',
  },
});

export default SignUp;
