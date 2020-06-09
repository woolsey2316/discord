import { model, Schema, Document } from 'mongoose';

export interface IMessage extends Document {
  content: String
  date: Date
  user: String
  _id: Number
  reactionList: Array<String>
}

const Message : Schema = new Schema({
  content: { type: String, required: true },
  date: { type: Date, required: true },
  user: { type: String, required: true },
  _id: { type: Number, required: true },
  reactionList: { type: Array, required: false },
})

export default model<IMessage>('messages', Message)
