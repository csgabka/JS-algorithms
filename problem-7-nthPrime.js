function nthPrime(n) {
  const primes = [2];
  let number = 3;
  while (primes.length < n) {
    if(isPrime(number)) {
      primes.push(number);
    }
    number += 2;
  }
  return primes.pop();
}

function isPrime(number) {
  for (let i=2; i<number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

nthPrime(6);