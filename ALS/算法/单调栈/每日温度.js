// [73,74,75,71,69,72,76,73]
var dailyTemperatures = function (temperatures) {
  let answer = new Array(temperatures.length).fill(0); // 初始化
  let monotone = [];  //栈数组
  for (let i = 0; i < temperatures.length; i++) {
      while (monotone.length && temperatures[i] > temperatures[monotone[monotone.length-1]]) {
        answer[monotone[monotone.length-1]] = i - monotone[monotone.length-1]
        monotone.pop()
      }
      // 入栈当前元素下标 这里维持单调栈
      monotone.push(i);
  }
  return answer;
};

