import { StyleSheet, Text, View } from 'react-native'
import React , {useState , useEffect} from 'react'
import axios from 'axios';
const Api = () => {
  const [data , setData] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {
        setData(response.data);
      })
  }, []);
  return (
    <View style={{
      flex : 1,
      justifyContent : 'center',
      alignItems : 'center'
    }}>
      <Text>ini adalah tittle : {data?.title}</Text>
      <Text>ini adalah body: {data?.body}</Text>
      <Text>ini adalal user id :{data?.userId}</Text>
    </View>
  )
}
export default Api
// API => Application Programming Interface
// fetch api
// axios => npm i axios 
// api => GET , POST , PUT , DELETE => CRUD