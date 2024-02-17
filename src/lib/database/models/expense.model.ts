import { Schema, model, models } from "mongoose";

export interface Expense extends Document {
    title: string;
    category?: string;
    amount: number;
    date?: Date;
    createdAt: Date;
    updatedAt: Date;
    user: {
        _id: string;
    }; 
  }

const ExpenseSchema = new Schema({
    title: {type: String, required: true},
    category: {type: String},
    amount: {type: Number, required: true},
    date: {type: Date},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
},
{ timestamps: true })

const Expense = models?.Expense || model('Expense', ExpenseSchema)

export default Expense