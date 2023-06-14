var isSubsequence = function(s, t) {
  let sl = s.length,
       tl = t.length,
       i = 0,
       j = 0
   while (j < tl) {
    if (i === sl ) {
      return true
    }
     if (s[i] === t[j]) {
       console.log(i);
       i++
     }
     j++
   }
   return i == sl
 };
 isSubsequence("abc","ahbgdc")