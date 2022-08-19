type Expense = {
  name: string;
  category: string;
  value: number;
};

type sourceOfIncome = {
  name: string;
  category: string;
  value: number;
};

type IncomeControl = {
  expenses: Expense[];
  balance: number;
  sourceOfIncome: sourceOfIncome[];
};
