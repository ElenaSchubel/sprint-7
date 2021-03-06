//first problem
function min(a, b) {
 	if (a > b)
      return a;
    else
      return b;

}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10



// second problem
function isEven(num) {
  if (num == 0)
  return true;
  else if (num ==1)
  return false;
  else if (num < 0)
   return isEven(-num);
  else
   return isEven(num - 2);
}



console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??


//problem 3

function countChar(str, ch) {
  var count = 0;
  for (var i = 0; i < str.length; i++)
    if (str.charAt(i) == ch)
      count += 1;
  return count;
}

function countBs(str) {
  return countChar(str, "B");
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
