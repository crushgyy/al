/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let left = 0;//定义左指针
  let res = 0;//定义无重复字符长度
  let map = new Map();//定义map方法，用以后续判断是否有重复字母、获取元素下标索引、存储索引

  for(let i=0;i<s.length;i++){//for遍历循环，i为右侧滑动指针
      if(map.has(s[i]) && map.get(s[i]) >= left)//如果字符中有重复的，并且右侧指针的索引>左侧指针索引
      {
        left = map.get(s[i])+1;//那么左侧指针索引进一位
      }
      res = Math.max(res,i-left+1);//数学方法判断“符合题意”的字符最长值，res最初为0，通过不断循环迭代，来两者比较最长部分
      map.set(s[i],i);//每次循环更新一下map中的键值对，重点是i索引
  }//在不断判断与左侧滑动+max最长值判断的多重约束下，最终得到理想值res
  return res;//返回结果
};