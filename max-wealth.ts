const accounts: number[][] = [[7,1,3], [2,8,7], [1,9,5]];

// const wealthy = (accounts: number[][]): number => {
//   let total: number = 0;

//   for (let i = 0; i < accounts.length; i++) {

//     let sum = 0;
//     for (let j = 0; j < accounts[i].length; j++) {
      
//       sum += accounts[i][j];
//       console.log(`each sum : ${sum}`)

//     }
//     if (sum > total) total = sum;

//   }

//   return total;
// }

const wealthy = (accounts: number[][]): number => {
  let total: number = 0;

  for (let account of accounts) {
    let sum = 0;
    for (let bank of account) {
      sum += bank;
    }
    total = Math.max(total, sum);
  }
  return total;
}

const result = wealthy(accounts);

console.log(result);