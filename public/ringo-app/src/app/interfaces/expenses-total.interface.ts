export interface ExpensesTotal {
  total: number;
  details: ExpensesTotalDetail[];
}

interface ExpensesTotalDetail {
  name: string;
  date: string;
  price: number;
}
