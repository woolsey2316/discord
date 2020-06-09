import mongoose, { Schema, Document } from 'mongoose'

export interface IUser extends Document {
  name: String
  _id: Number
  channelList: Array<Number>
}

const User = new Schema({
  name: { type: String, required: true },
  _id: { type: Number, required: true },
  channelList: { type: Array, required: false },
})

module.exports = mongoose.model<IUser>('users', User)
