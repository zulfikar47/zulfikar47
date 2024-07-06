import React from 'react';
import { View } from 'react-native';
import {SafeAreaView } from 'react-native-safe-area-context';
import Headline from '../Component/Headline';
import InputText from '../Component/InputText'
import ButtonComponent from '../Component/Button';
import Konfirmasi from '../Component/Konfirmasi';

const ForgotPassword = () => {

  return (
      <SafeAreaView>
          <View>
            <View style={{
              marginBottom: 50,
            }}>
              <Headline text="Forgot password" />
            </View>

            <View style={{
              padding:10
            }}>
              <Konfirmasi text="Please, enter your email address. You will receive a link to create a new password via email." />
            </View>

          <View style={{}}>
              <InputText placeholder="Email" borderColor="#FF0000" placeholderTextColor="#FF0000" />
          </View>

          <View style={{
              marginTop: -30,

          }}>
              <Konfirmasi text="Not a valid email address. Should be your@email.com" color="red" fontSize={11} />
          </View>

          <View style={{
              marginTop: 20,
          }}>
          <ButtonComponent backgroundColor="#FF0000" text="SEND" />
          </View>


          </View>
      </SafeAreaView>
  )
}

export default ForgotPassword;