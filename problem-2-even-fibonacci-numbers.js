function fiboEvenSum(n) {
let fiboArray = [1, 2];
let total = 2;
let i=2;
let sum=0;
 while (total < n&& sum <= n) {
  sum=fiboArray[i-1]+fiboArray[i-2];
  fiboArray.push(sum);
  (sum % 2 == 0) ? total+=sum : total;
  i++;
  }
  return total;
 }

fiboEvenSum(1000);
