import mongoose, { Document, Schema } from 'mongoose'

interface ITodo extends Document {
    todo: string
}

interface IUser extends Document {
    name: string,
    //todos: ITodo[]
}

let userSchema: Schema = new Schema({
    user: {type: String, required: true}
})

const User: mongoose.Model<IUser> = mongoose.model<IUser>("User", userSchema)

export {User, IUser}
