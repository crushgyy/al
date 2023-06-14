function topKFrequent(nums, k) {
  const countMap = new Map();
  for (let num of nums) {
      countMap.set(num, (countMap.get(num) || 0) + 1);
  }
  // tS没有最小堆的数据结构，所以直接对整个数组进行排序，取前k个元素
  return [...countMap.entries()] // [[键，值]， [键，值]， [键，值]]
      .sort((a, b) => b[1] - a[1]) // 按照次数顺序排队
      .slice(0, k) //取前k个
      .map(i => i[0]); // 取出元素
};
let arr = [1,1,1,2,2,3,3,3,3,3,5,5,5,4,2,67,7,4,5,8,8,8,8,9,9]
topKFrequent(arr,3)