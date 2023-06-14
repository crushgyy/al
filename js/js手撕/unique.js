var arr = [1,1,2,3,4,5,6,7,4,3,'1',8,'3','1','3','66']

function unique(arr){
	var res = arr.filter(function(item,index,arr){
		return arr.indexOf(item) === index
	})
	return res;
}
console.log(unique(arr));

var arr = [1,1,2,3,4,5,6,7,4,3,'1',8,'3','1','3','66']

function unique(arr){
  var res = []
  var pre = arr[0]
  arr = arr.sort()
  for(var i = 1; i < arr.length; i++){
    if(pre !== arr[i]){
      res.push(arr[i])
    }
    pre = arr[i]
  }
  return res;
}

console.log(unique(arr));

var arr = [1,1,2,3,4,5,6,7,4,3,'1',8,'3','1','3','66']
var unique = (arr) => [...new Set(arr)]
console.log(unique(arr));