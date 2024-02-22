/* eslint-disable no-unused-vars */

// ====== USER PARAMS
declare type CreateUserParams = {
    clerkId: string;
    email: string;
    firstName: string;
    lastName: string;
  };
  
  declare type UpdateUserParams = {
    firstName: string;
    lastName: string;
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
  
  
  
  // ====== URL QUERY PARAMS
  declare type FormUrlQueryParams = {
    searchParams: string;
    key: string;
    value: string | number | null;
  };
  
  declare type UrlQueryParams = {
    params: string;
    key: string;
    value: string | null;
  };
  
  declare type RemoveUrlQueryParams = {
    searchParams: string;
    keysToRemove: string[];
  };
  
  declare type SearchParamProps = {
    params: { id: string; type: TransformationTypeKey };
    searchParams: { [key: string]: string | string[] | undefined };
  };
  
