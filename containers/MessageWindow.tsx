import React from 'react'
import { TextInput, View } from 'react-native'
import { Button } from 'react-native-elements'
import styled from 'styled-components/native'
import apis from '../api/api'
import CommentList from './CommentList'

const Container = styled.View`
  flex: 1;
  background-color: palevioletred;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: palevioletred;
`;

const MessageWindow: React.FunctionComponent<{}> = () => {
  const [value, setValue] = React.useState('');

  function sendMessage() {
    apis.sendMessage({
      user: "davo",
      date: new Date,
      content: value
    })
    setValue('')

  }
  return (
    <View>
      <TextInput 
        placeholder="Enter Message.."
        editable
        onChangeText={text => setValue(text)}
      />
      <Button onPress={sendMessage} title='Send'/>
    </View>
  );
}

export default MessageWindow;