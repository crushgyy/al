
//单调栈 简洁版本 只处理情况三
var trap = function(height) {
  const len = height.length;
  if(len <= 2) return 0; // 可以不加
  const st = [];// 存着下标，计算的时候用下标对应的柱子高度
  let sum = 0;
  for(let i = 0; i < len; i++){ // 只处理的情况三，其实是把情况一和情况二融合了
      // height[i] 右边的元素 
      while (st.length && height[i] > height[st[st.length - 1]]) { // 注意这里是while
          let mid = st[st.length - 1]; // 中间的元素
          st.pop();
          if (st.length !== 0) {
            // height[st[st.length - 1]] 左边的元素
              let h = Math.min(height[st[st.length - 1]], height[i]) - height[mid];
              let w = i - st[st.length - 1] - 1; // 注意减一，只求中间宽度
              sum += h * w;
          }
      }
      st.push(i);
  }
  return sum;
};