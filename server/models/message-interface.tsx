export interface IMessage extends Document {
  content: String
  date: Date
  user: String
  _id: Number
  reactionList: Array<String>
}