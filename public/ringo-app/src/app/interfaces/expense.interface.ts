import { ExpensesDivision } from '../enums/expenses-division.enum';

export interface Expense {
  name: ExpensesDivision;
  value: number;
}
