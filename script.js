'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Ikeys Benjamin',
  transaction: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Taylor Smith',
  transaction: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Tunde Adresse',
  transaction: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Toluwalase John',
  transaction: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};
const account5 = {
  owner: 'Paul John Josephine Hilary',
  transaction: [430, 1000, 700, 50, 90, 2000, 5000, 6000, 20000],
  subTransaction: [430, 1000, 700, 50, 90, 2000, 5000],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4, account5];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelBalance2 = document.querySelector('.balance2');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const displayTransactions = function (transactions) {

  containerMovements.innerHTML = ""
  
  transactions.forEach(function (goat, i) {
    const transactionType = goat > 0 ? "credit" : "debit"
    

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${transactionType}">${i + 1} ${transactionType}</div>
        <div class="movements__value">₦ ${goat}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html)

  })
}

displayTransactions(account5.transaction)


const calculateBalance = function (goat, chat) {

  const balance = goat.reduce((ruler, pencil) => ruler + pencil, 0)
  const balance2 = chat.reduce((ruler, pencil) => ruler + pencil, 0)
  
  labelBalance.textContent = `₦ ${balance} `
  labelBalance2.textContent = `₦ ${balance2} `
  
}

calculateBalance(account5.transaction, account5.subTransaction)


////CREATING USERNAME 
const createUsername = function (jose) {
  jose.forEach(function (name) {
    name.username = name.owner
      .toLowerCase()
      .split(" ")
      .map(name => name[0])
      .join("")
    
  
  })
}
createUsername(accounts)
console.log(accounts)












