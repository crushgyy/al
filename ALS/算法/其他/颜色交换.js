// 给定一个包含红色、白色和蓝色、共 n 个元素的数组 nums ，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

// 我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

// 必须在不使用库内置的 sort 函数的情况下解决这个问题。

var sortColors = function(nums) {
  const length = nums.length - 1;
  let start = 0;
  let end = length;
  let cur = 0;
  let cval;
  function swap(start, end) {
      const temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp; 
  }
  while(cur <= end) {
      cval = nums[cur];
      // 当前数为0，就往前放，放了之后0指针自然就+1;
      // 但还需要cur也加1，因为cur已经为0了，交换后，不可能变大，所以curr也得往前
      if (cval === 0) {
          swap(cur, start);
          start++;
          cur++;
      }
      // 这里start不能++，因为后面交换回来的，有可能是0，所以还得经下一轮比较判断，再决定是否+1；
      if(cval === 2) {
          swap(cur, end);
          end--;
      } 
      // 为1，就是特殊情况，暂时不动，继续往前查找
      if (cval === 1) {
          cur++
      }
  }
};