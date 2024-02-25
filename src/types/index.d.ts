/* eslint-disable no-unused-vars */

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
        title: string;
        date: string;
        category: string;
        amount: number;
      };
      userId: string;
      path: string;
    };