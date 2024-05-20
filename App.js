import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <View style={{ flex: 1, 
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'flex-end',
      flexDirection: 'row',
     }}>
      <View style={{
        backgroundColor: 'red',
        width: 100,
        height: 40,
        marginRight: 10,
        borderRadius: 10,
      }}>
      <Text style={{
        color:'white',
        textAlign:'center',
        fontSize:20,
        fontWeigth:'bold',
      }}>
        Login
        </Text>
      </View>
      <View style={{
         backgroundColor: 'blue',
         marginRight: 10,
         width: 100,
         height: 40,
         borderRadius: 10,
      }}>
        <Text style={{
        color:'white',
        textAlign:'center',
        fontSize:20,
        fontWeigth:'bold',
      }}>
        Register
        </Text>
      </View>
      </View>     
  );
}