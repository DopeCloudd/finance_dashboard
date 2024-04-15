// Function that get last 15days
export const last15Days = (function () {
  const dates = [];
  const today = new Date(); // Date actuelle
  const sydneyDate = new Date(today.toLocaleString("en-US", { timeZone: "Australia/Sydney" }));

  for (let i = 14; i >= 0; i--) {
    const date = new Date(sydneyDate);
    date.setDate(date.getDate() - i);
    dates.push(date);
  }

  return dates;
})();

// Function that get randomy 15 amounts
export const generateRandomAmounts = (function () {
  const amounts = [];
  for (let i = 0; i < 15; i++) {
    const randomAmount = (Math.random() * (20000 - 5000) + 5000).toFixed(2);
    amounts.push(parseFloat(randomAmount));
  }
  return amounts;
})();

// Function to get last twelve months from current month start
export const generateLastTwelveMonths = (function () {
  const currentDate = new Date();
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const lastTwelveMonths = [];

  for (let i = 0; i < 12; i++) {
    const monthIndex = (currentDate.getMonth() - i + 12) % 12;
    lastTwelveMonths.push(`${monthNames[monthIndex]}`);
  }

  return lastTwelveMonths.reverse();
})();

export const chartDays = [
  {
    label: "24 Hours",
    value: 1,
  },
  {
    label: "30 Days",
    value: 30,
  },
  {
    label: "3 Months",
    value: 90,
  },
  {
    label: "1 Year",
    value: 365,
  },
];

/* EXPENSES */
function createData(id, date, description, category, paymentMethod, amount) {
  return { id, date, description, category, paymentMethod, amount };
}

export const expensesRows = [
  createData(
    0,
    '21 Mar, 2024',
    'Rent',
    'Accomodation',
    'VISA ⠀•••• 3719',
    800,
  ),
  createData(
    1,
    '20 Mar, 2024',
    'Stand up desk',
    'Shopping',
    'VISA ⠀•••• 3719',
    866.99,
  ),
  createData(
    2,
    '20 Mar, 2024',
    'MacBook Air',
    'Shopping',
    'VISA ⠀•••• 3719',
    1700.99
  ),
  createData(
    3,
    '18 Mar, 2024',
    'Foods',
    'Food',
    'VISA ⠀•••• 3719',
    65.39,
  ),
  createData(
    4,
    '15 Mar, 2024',
    'Coffee',
    'Food',
    'VISA ⠀•••• 3719',
    6.79,
  ),
  createData(
    5,
    '15 Mar, 2024',
    'Coles',
    'Food',
    'VISA ⠀•••• 3719',
    6.79,
  ),
  createData(
    6,
    '15 Mar, 2024',
    'Woolworth',
    'Food',
    'VISA ⠀•••• 3719',
    67.9,
  ),
  createData(
    7,
    '14 Mar, 2024',
    'Zoo',
    'Entertainement',
    'VISA ⠀•••• 3719',
    80,
  ),
];

/* EXPENSES CATEGORIES */
export const amountsByCategory = (() => {
  const calculateAmountsByCategory = (expensesRows) => {
    return expensesRows.reduce((acc, row) => {
      if (!acc[row.category]) {
        acc[row.category] = 0;
      }
      acc[row.category] += row.amount;
      return acc;
    }, {});
  };

  return calculateAmountsByCategory(expensesRows);
})();