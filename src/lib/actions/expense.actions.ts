"use server"

import { AddExpenseParams, UpdateExpenseParams } from "@/types";
import { handleError } from "../utils";
import { connectToDatabase } from "../database/mongoose";
import { revalidatePath } from "next/cache";
import User from "../database/models/user.model";
import Expense from "../database/models/expense.model";
import { useRouter } from "next/router";

const router = useRouter();

//create populateuser function
const populateUser = (query: any) => query.populate({
  path: "user",
  model: "User",
  select: "_id",
}).execPopulate();


// ADD EXPENSE
export async function addExpense({ expense, userId, path }: AddExpenseParams) {
  try {
    await connectToDatabase();

    const user = await User.findById(userId);

    if (!user) throw new Error("User not found");

    const newExpense = await Expense.create({
      ...expense,
      user: user._id,
    });

    revalidatePath(path);

    return JSON.parse(JSON.stringify(newExpense));
  } catch (error) {
    handleError(error);
    
  }
}

// UPDATE EXPENSE
export async function updateExpense({ expense, userId, path }: UpdateExpenseParams) {
  try {
    await connectToDatabase();

    const expenseToUpdate = await Expense.findById(expense._id);

    if (!expenseToUpdate || expenseToUpdate.user.toHexString() !== userId) throw new Error("Unauthorized or Expense not found");

    const updatedExpense = await Expense.findByIdAndUpdate(
      expenseToUpdate._id,
      expense,
      {new: true}
    )

    revalidatePath(path);

    return JSON.parse(JSON.stringify(expense));
  } catch (error) {
    handleError(error);
    
  }
}

// DELETE EXPENSE
export async function deleteExpense(expenseId: string) {
    try {
      await connectToDatabase();
  
      await Expense.findByIdAndDelete(expenseId);
    } catch (error) {
      handleError(error);  
    } finally {
      router.push("/painel/despesas");
    }
}


// GET EXPENSE
export async function getExpenseById(expenseId: string) {
    try {
      await connectToDatabase();

      const expense = await populateUser(Expense.findById(expenseId));

      if (!expense) throw new Error("Expense not found");
  
      return JSON.parse(JSON.stringify(expense));
    } catch (error) {
      handleError(error);
      
    }
  }
