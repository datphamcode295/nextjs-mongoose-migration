import { Schema, model, models } from 'mongoose'

interface IUser {
  email: string
  name: string
  createdAt: Date
  updatedAt: Date
}

const userSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
  },
  { timestamps: true }
)

export const User = models.User || model<IUser>('User', userSchema)