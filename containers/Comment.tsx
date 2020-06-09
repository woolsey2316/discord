import React from 'react'
import {View, Text } from 'react-native'

export default (message) => {
  return (
    <View>
      <Text>{message.content}</Text>
      <Text>{message.date}</Text>
      <Text>{message.user}</Text>
    </View>

  )
}