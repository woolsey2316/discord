import React from 'react'
import { StyleSheet, View , Text} from 'react-native'
import MessageWindow from './containers/MessageWindow'
import styled from 'styled-components/native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Container = styled.View`
  height: 100%;
  background-color: palevioletred;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  return (
    <Container>
      <MessageWindow></MessageWindow>
    </Container>
  );
}