var nextPermutation = function(nums) {
  let len = nums.length,
       stack = []
   let i ;
   for (i = len-1; i >= 0; i--){
     if (stack.length && nums[i] < nums[stack[stack.length-1]]) {
       let r = stack.length-1;
       while (nums[i] < nums[stack[r]]) {
         r--
       }
       [nums[i],nums[stack[r+1]]] = [nums[stack[r+1]],nums[i]]
       break
     } 
     stack.push(i)
   }
   let l = i+1,
       r = len -1
  // 让交换后的数字尽可能小 尽可能接近原来的数字
   while (l < r) {
     [nums[l],nums[r]] = [nums[r],nums[l]]
     l++
     r--
   }
   return  nums
 };
 765342110