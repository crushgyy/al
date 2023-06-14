var canCompleteCircuit = function(gas, cost) {
  let curSum = 0
  let min = Infinity

  for(let i = 0; i < gas.length; i++) {
      let rest = gas[i] - cost[i]
      curSum += rest
      if(curSum < min) {
          min = curSum
      }
  }
  
  if(curSum < 0) return -1   //1.总油量 小于 总消耗量
  if(min >= 0) return 0      //2. 说明油箱里油没断过
                             //3. 从后向前，看哪个节点能这个负数填平，能把这个负数填平的节点就是出发节点
  for(let i = gas.length -1; i >= 0; i--) {
      let rest = gas[i] - cost[i]
      min += rest
      if(min >= 0) {
          return i
      }
  }
  return -1
}
