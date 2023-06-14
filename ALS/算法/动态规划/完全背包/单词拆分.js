// 给你一个字符串 s 和一个字符串列表 wordDict 作为字典。请你判断是否可以利用字典中出现的单词拼接出 s 。
// 可以重复 完全背包
// 有排序 先遍历背包 再遍历物品
const wordBreak = (s, wordDict) => {

  let dp = Array(s.length + 1).fill(false);
  dp[0] = true;

  for(let i = 0; i <= s.length; i++){
      for(let j = 0; j < wordDict.length; j++) {
          if(i >= wordDict[j].length) {
              if(s.slice(i - wordDict[j].length, i) === wordDict[j] 
                 && dp[i - wordDict[j].length]
                ) 
              {
                dp[i] = true
              }
          }
      }
  }

  return dp[s.length];
}