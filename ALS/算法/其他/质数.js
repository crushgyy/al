var countPrimes = function(n) {
  for(var i = 2, r = 0; i < n; i++) isPrime(i) && r++
  return r
};
var isPrime = function(n) {
  for(var i = 2; i < n; i++)
      if (n % i === 0) return false
  return true
}
