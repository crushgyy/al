let str = '23123123123123'

function format(num){  
  num = String(num);//数字转字符串
  let str = '';//字符串累加
  for (let i = num.length- 1, j = 1; i >= 0; i--, j++){  
      if (j%3 == 0 && i != 0){ //每隔三位加逗号，过滤正好在第一个数字的情况
          str = ',' + num[i] + str; //加千分位逗号
		      continue; 
      }  
      str = num[i] + str; //累加数字
  }  
  console.log(str);
  return str;
}
format(str)