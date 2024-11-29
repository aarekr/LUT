import mongoose, { Document, Schema } from 'mongoose'

interface ITodo extends Document {
    todo: string
}

interface IUser extends Document {
    name: string,
    //todos: ITodo[]
}
