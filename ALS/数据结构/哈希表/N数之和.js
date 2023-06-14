// 两数之和
var twoSum = function(nums, target) {
  let map = new Map();
  for(let i = 0, len = nums.length; i < len; i++){
      if(map.has(target - nums[i])){
          return [map.get(target - nums[i]), i];
      }else{
          map.set(nums[i], i);
      }
  }
  return [];
};
// 三数之和
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let ans = [];
  const len = nums.length;
  if(nums == null || len < 3) return ans;
  nums.sort((a, b) => a - b); // 排序
  
  for (let i = 0; i < len ; i++) {
      if(nums[i] > 0) break; // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
      if(i > 0 && nums[i] == nums[i-1]) continue; // 去重
      let L = i+1;
      let R = len-1;
      while(L < R){
          const sum = nums[i] + nums[L] + nums[R];
          if(sum == 0){
              ans.push([nums[i],nums[L],nums[R]]);
              while (L<R && nums[L] == nums[L+1]) L++; // 去重
              while (L<R && nums[R] == nums[R-1]) R--; // 去重
              L++;
              R--;
          }
          else if (sum < 0) L++;
          else if (sum > 0) R--;
      }
  }        
  return ans;
};
// 四数之和
function fourSumm(nums, target){
  let arr = nums.sort((a, b) => a - b);
  let l = nums.length;
  let resArr = [];
  for (let i = 0; i < l; i++) {
      if (i > 0 && arr[i] === arr[i - 1]) {
          continue;
      }
      for (let j = i + 1; j < l; j++) {
          if ((j - i) > 1 && arr[j] === arr[j - 1]) {
              continue;
          }
          let third = j + 1;
          let fourth = l - 1;
          while (third < fourth) {
              let total = arr[i] + arr[j] + arr[third] + arr[fourth];
              if (total === target) {
                  resArr.push([arr[i], arr[j], arr[third], arr[fourth]]);
                  while (third < fourth && arr[third] === arr[third + 1]) third++;
                  while (third < fourth && arr[fourth] === arr[fourth - 1]) fourth--;
                  third++;
                  fourth--;
              } else if (total < target) {
                  third++;
              } else {
                  fourth--;
              }
          }
      }
  }
  return resArr;
};