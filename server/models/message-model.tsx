import * as mongoose from 'mongoose';

export interface IMessage extends mongoose.Document {
  content: String
  date: Date
  user: String
  reactionList: Array<String>
}

export const MessageSchema = new mongoose.Schema({
  content: {type: String, required: true},
  date: {type: Date, required: true},
  user: {type: String, required: true},
  reactionList: {type: Array, required: false},
})

const Message = mongoose.model<IMessage>('messages', MessageSchema);
export default Message;
