import React from "react";
import { View, Text, Button } from "react-native";

const CostumButton = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white',
            justifyContent: 'center', //kolom
            alignItems: 'flex-end', //baris
            flexDirection: 'row',
            padding: 20,
            marginBottom: 80
          }}>
            <ButtonComponent backgroundColor='black' text='Login'/>
            <ButtonComponent backgroundColor='green'text='Register'/>
            </View>
    )
  
}
const ButtonComponent = ({backgroundColor,text})=>{
  return(
    <View style={{
      backgroundColor: backgroundColor,
       width: 100, height: 50,
      bondenRadius: 10,
      marginLeft: 10
  }}>
      <Text style={{
          color: 'white',
          textAlign:'center',
          lineHeight: 50,
          fontSize: 20,
          fontWeight: 'bold'
      }}>
          {text}
      </Text>
      </View>
    
  )
}
            
             
      export default CostumButton;