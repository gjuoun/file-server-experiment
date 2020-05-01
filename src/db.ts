import mongoose, { Schema } from 'mongoose'

export const db = mongoose.connect(`mongodb+srv://gjuoun:21346687@cluster0-j5f0q.mongodb.net/test?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true, useUnifiedTopology: true
  }, () => {
    console.log("connected to mongo db")
  })

export interface UserDoc extends mongoose.Document {
  // _id: string,
  name: string,
  avatar: Buffer
  avatar_url: string
}

const userSchema = new Schema({
  // _id: {type:String},
  name: { type: String },
  avatar: { type: Buffer },
  avatar_url: { type: String }
})

userSchema.pre("save", async function () {
  // const user = this
  // console.log(`get user id before - `, user._id)
})

export const User = mongoose.model<UserDoc>("User", userSchema)