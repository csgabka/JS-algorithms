function largestPalindromeProduct(n) {
  let palindromes = [];
  let largestNum = parseInt(Array(n).fill(9).join(''));
  let smallestNum = parseInt(1 + Array(n-1).fill(0).join(''));
   for (let i = largestNum; i >= smallestNum; i--) {
    for (let j = largestNum; j >= smallestNum; j--) {
      let multiples = i * j; 
      if (isPalindrome(multiples)) {
          palindromes.push(multiples);
      } 
    }
  }
  return Math.max(...palindromes);
}

function isPalindrome(multiples) {
  return multiples.toString() === multiples.toString().split('').reverse('').join('');
}

largestPalindromeProduct(3);
