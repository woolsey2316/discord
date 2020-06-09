import React from 'react'
import apis from '../api/api'
import Comment from './Comment'
import { View } from 'react-native'

interface Props {}
interface State {
  messages: Array<Object>;
  isLoading: boolean;
}
interface Data {
  success: boolean;
  data: Array<String>;
}
interface Response {
  data: Data;

}

class CommentList extends React.Component<Props, State> {
  constructor(props: Readonly<Props>) {
    super(props)
    this.state = ({messages: [], isLoading: false})
  }

  componentDidMount = async () => {
    await apis.getAllMessages().then((message: Response) => {
      console.log('data fetched from server ? ' + JSON.stringify(message.data.success))
      if (message.data.data) {
        this.setState({
          messages: message.data.data,
          isLoading: false,
        })
      }
    })
  }

  componentDidUpdate = async () => {
    await apis.getAllMessages().then((message: Response) => {
      console.log('data fetched from server ? ' + JSON.stringify(message.data.success))
      if (message.data.data) {
        this.setState({
          messages: message.data.data,
          isLoading: false,
        })
      }
    })
  }
  render() {
    return (
      <View>
      {
        this.state.messages.map( elem => <Comment message={elem}/>)
      }
      </View>
    )
  }
}

export default CommentList;