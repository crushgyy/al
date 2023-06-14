/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	let len =s.length;
	if(len % 2 !==0 ){
		return false;
	}
 	let length = len / 2;
		for (let i = 0; i < length; i++) {
			s = s.replace("()", "");
			s = s.replace("{}", "");
			s = s.replace("[]", "");
		}

	return s.length === 0;
};

var isValid = function(s) {
  const n = s.length;
  if (n % 2 === 1) {
      return false;
  }
  const pairs = new Map([
      [')', '('],
      [']', '['],
      ['}', '{']
  ]);
  const stk = [];
  for (let ch of s){
      if (pairs.has(ch)) {
          if (!stk.length || stk[stk.length - 1] !== pairs.get(ch)) {
              return false;
          }
          stk.pop();
      } 
      else {
          stk.push(ch);
      }
  };
  return !stk.length;
};
