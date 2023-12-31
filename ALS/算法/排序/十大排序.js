// 1.冒泡排序
// 时间复杂度：平均 O(n²)、最好 O(n²)、最坏 O(n²)
// 空间复杂度：O(1)
var sortArray = function(nums) {
  const { length } = nums;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
  return nums;
};
// 2.选择排序
// 时间复杂度：平均 O(n²)、最好 O(n²)、最坏 O(n²)
// 空间复杂度：O(1)
function selectionSort(arr) {
  for (var i = 0; i < arr.length-1; i++) { // 长度-1，是因为剩下最后一个数时不用做判断
    let minIndex = i
    for (var j = i + 1; j < arr.length; j++) { // j = i + 1 是因为自身不需要做比较
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
  }
  return arr
}
// 3.插入排序
// 时间复杂度：平均 O(n²)、最好 O(n)、最坏 O(n²)
// 空间复杂度：O(1)
function insertSort(arr){
  for(let i = 1;i < arr.length;i++){
      let j = i-1;
      if(arr[i]<arr[j]){
          let temp = arr[i];
          while(j >= 0 && temp < arr[j]){
              arr[j+1] = arr[j];
              j--;
          }
          arr[j+1] = temp;
      }
  }
  return arr;
}

// 4.快速排序（分治）
// 时间复杂度：平均 O(nlogN)、最好 O(nlogN)、最坏 O(n²)
// 空间复杂度：O(nlogN)
function sortArray(arr){
  if(arr.length <= 1) return arr;
  let right = [],left = [],keys = arr.shift();
  for(let value of arr){
      if(value > keys){
          right.push(value)
      }else{
          left.push(value);
      }
  }
  return sortArray(left).concat(keys,sortArray(right));
}

// 5.归并排序
// 时间复杂度：平均 O(nlogN)、最好 O(nlogN)、最坏 O(nlogN)
// 空间复杂度：O(N) 空间换时间
var sortArray = function (nums) {
  const n = nums.length;
  if (n < 2) return nums;
  return mergeSort(nums);
};

function mergeSort(nums) { 
  const n = nums.length;
  if (n < 2) {
    return nums;
  }
  const mid = Math.floor(n / 2);
  return merge(mergeSort(nums.slice(0, mid)), mergeSort(nums.slice(mid)));
}

function merge(arr1, arr2) {
  const m = arr1.length;
  const n = arr2.length;
  let i = 0; 
  let j = 0;
  const ans = [];
  while (i < m && j < n) {
    if (arr1[i] < arr2[j]) {
      ans.push(arr1[i++]);
    } else {
      ans.push(arr2[j++]);
    }
  }
  while (i < m) {
    ans.push(arr1[i++]);
  }
  while (j < n) {
    ans.push(arr2[j++]);
  }
  return ans;
}













// 8.基数排序
// 基于计数排序的排序算法。

// 时间复杂度：O(d(n+k))(d 表示最长数字的位数，k 表示每个基数可能的取值范围大小)
// 空间复杂度：O(n+k)（k 表示每个基数可能的取值范围大小）
var sortArray = function(nums) {
  countingSort(nums);
  return nums;
};
function countingSort(nums) {
  const n = nums.length;
  let min = nums[0];
  let max = nums[0];
  for (const num of nums) {
    if (num < min) {
      min = num;
    }
    if (num > max) {
      max = num;
    }
  }
  const range = max - min + 1;
  const counting = new Array(range).fill(0);
  for (const num of nums) {
    counting[num - min]++;
  }
  counting[0]--;
  for (let i = 1; i < range; i++) {
    counting[i] += counting[i - 1];
  }
  const ans = new Array(n);
  for (let i = n - 1; i >= 0; i--) {
    ans[counting[nums[i] - min]] = nums[i];
    counting[nums[i] - min]--;
  }
  for (let i = 0; i < n; i++) {
    nums[i] = ans[i];
  }
}
// 9.
var sortArray = function(nums) {
  radixSort(nums);
  return nums;
};
function radixSort(nums) {
  const n = nums.length;
  let max = Math.abs(nums[0]);
  for (const num of nums) {
    if (Math.abs(num) > max) {
      max = Math.abs(num);
    }
  }
  let maxDigitLength = 0;
  while (max !== 0) {
    maxDigitLength++;
    max = Math.floor(max / 10);
  }
  const counting = new Array(19).fill(0);
  const ans = new Array(n).fill(0);
  let dev = 1;
  for (let i = 0; i < maxDigitLength; i++) {
    for (const num of nums) {
      const radix = (num > 0 ? Math.floor(num / dev) : Math.ceil(num / dev)) % 10 + 9;
      counting[radix]++;
    }
    counting[0]--;
    for (let j = 1; j < 19; j++) {
      counting[j] += counting[j - 1];
    }
    for (let k = n - 1; k >= 0; k--) {
      const radix = (nums[k] > 0 ? Math.floor(nums[k] / dev) : Math.ceil(nums[k] / dev)) % 10 + 9;
      ans[counting[radix]] = nums[k];
      counting[radix]--;
    }
    for (let l = 0; l < n; l++) {
      nums[l] = ans[l];
    }
    counting.fill(0);
    ans.fill(0);
    dev *= 10;
  }
}
// 桶排序
// 基于其他排序算法的排序算法。

// 时间复杂度：平均 O(n + k)、最好 O(n + k)、最坏 O(n²)
// 空间复杂度：O(n + k)
var sortArray = function(nums) {
  let min = nums[0];
  let max = nums[0];
  for (const num of nums) {
    if (num < min) {
      min = num;
    }
    if (num > max) {
      max = num;
    }
  }
  const BUCKET_SIZE = nums.length;
  const bucketCount = Math.floor((max - min) / BUCKET_SIZE) + 1;
  const buckets = new Array(bucketCount).fill(0).map(() => []);
  for (const num of nums) {
    const index = Math.floor((num - min) / BUCKET_SIZE);
    buckets[index].push(num);
  }
  const ans = [];
  for (let i = 0; i < bucketCount; i++) {
    buckets[i].sort((a, b) => a - b);
    ans.push(...buckets[i]);
  }
  return ans;
};
// 5.堆排序
// 时间复杂度：平均 O(nlogN)、最好 O(nlogN)、最坏 O(nlogN)
// 空间复杂度：O(1)
var sortArray = function(nums) {
  buildMaxHeap(nums);
  for (let i = nums.length - 1; i > 0; i--) {
    [nums[i], nums[0]] = [nums[0], nums[i]];
    maxHeapify(nums, 0, i);
  }
  return nums;
};
function buildMaxHeap(nums) {
  const n = nums.length;
  for (let i = n >> 1; i >= 0; i--) {
    maxHeapify(nums, i, n);
  }
}
function maxHeapify(nums, index, heapSize) {
  let largest = index;
  let l = index * 2 + 1;
  let r = l + 1;
  if (l < heapSize && nums[l] > nums[largest]) {
    largest = l;
  }
  if (r < heapSize && nums[r] > nums[largest]) {
    largest = r;
  }
  if (largest !== index) {
    [nums[largest], nums[index]] = [nums[index], nums[largest]];
    maxHeapify(nums, largest, heapSize);
  }
}
// 4.希尔排序
// 插入排序的升级版本。

// 时间复杂度：平均 O(nlogN)、最好 O(nlog²N)、最坏 O(n²)
// 空间复杂度：O(1)
var sortArray = function(nums) {
  const n = nums.length;
  for (let gap = n >> 1; gap > 0; gap >>= 1) {
    for (let i = 0; i < gap; ++i) {
      for (let j = i + gap; j < n; j += gap) {
        let preIndex = j - gap;
        const curNum = nums[j];
        while (preIndex >= 0 && curNum < nums[preIndex]) {
          nums[preIndex + gap] = nums[preIndex];
          preIndex -= gap;
        }
        nums[preIndex + gap] = curNum;
      }
    }
  }
  return nums;
};