//冒泡排序
function bubble(arr){
	for (var i = 0; i < arr.length; i++) { //比较的轮次
		//每一轮比较的次数
		for (var j = 0; j < arr.length - i - 1; j++) {
			//判断前后两个个数是否符合交换条件
			if(arr[j] > arr[j + 1]){
				var tmp = arr[j + 1];
				arr[j + 1] = arr[j];
				arr[j] = tmp;
			}
		}
	}

}

//选择排序
function choose(arr){
	for (var i = 0; i < arr.length; i++) {
		for (var j = i + 1; j < arr.length; j++) {
			if(arr[i] > arr[j]){
				var tmp = arr[i];
				arr[i] = arr[j];
				arr[j] = tmp;
			}
		}
	}
}

//比较函数
//升序
function compare(value1, value2){
	if(value1 < value2){
    	return -1;
    }else if(value1 > value2){
    	return 1;
    }else{
    	return 0;
    }
}

/*function compare(value1, value2){
	return value1 - value2;
}*/

//降序
function compare(value1, value2){
	if(value1 < value2){
    	return 1;
    }else if(value1 > value2){
    	return -1;
    }else{
    	return 0;
    }
}

/*function compare(value1, value2){
	return value2 - value1;
}*/

