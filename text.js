import React from "react";
import { View, Text } from 'react-native';

const Teks = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white',
            justifyContent: 'center', 
            alignItems: 'center', 
          }}>
            <Text style={{
                color: 'black', // Mengubah warna teks menjadi hitam agar terlihat di background putih
                textAlign: 'center',
                fontSize: 30,
                fontWeight: 'bold',
                margin: 50,
              }}>
              Gojek App
            </Text>
        </View>
    );
}

export default Teks;