/* eslint-disable no-unused-vars */

import { Expense } from "@/lib/database/models/expense.model";

// ====== USER PARAMS
declare type CreateUserParams = {
    clerkId: string;
    email: string;
    firstName: string;
    lastName: string;
    photo: string;
  };
  
  declare type UpdateUserParams = {
    firstName: string;
    lastName: string;
    photo: string;
  };
  
  // ====== EXPENSE PARAMS
  declare type AddExpenseParams = {
    expense: {
      title: string;
      date: string;
      category: string;
      amount: number;
    };
    userId: string;
    path: string;
  };
  
  declare type UpdateExpenseParams = {
    expense: {
        _id: string;
        title: string;
        date: string;
        category: string;
        amount: number;
      };
      userId: string;
      path: string;
    };

    declare type ExpenseFormProps = {
      action: "Add" | "Update";
      userId: string;
      data?: Expense | null;
    };

// ====== CONSTANTS
export const defaultValues = {
  Descrição: "",
  Categoria: "",
  Valor: 0,
  Data: new Date(),
}