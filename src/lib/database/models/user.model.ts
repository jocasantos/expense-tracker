import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    clerkId: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    firstName: {type: String},
    lastName: {type: String},
})

const User = models?.User || model('Expense', UserSchema)