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

function $(vArg){
	//<1>对参数进行区分。
	switch(vArg[0]){
		case "#": //id
			return document.getElementById(vArg.substring(1));
			break;
		case ".": //className
			return elementByClassName(document,vArg.substring(1));
			break;
		default:
			//对参数的前五个字符，进行判断
			var str = vArg.substring(0, 5);
			if(str == "name="){ //name
				return document.getElementsByName(vArg.substring(5));
			}else{
				return document.getElementsByTagName(vArg);
			}
			break;
	}
}

function elementByClassName(parent, classStr){
	//<1>找到parent下所有的元素节点
	var nodes = parent.getElementsByTagName('*');
	var ressult = []; //用记录符合条件的元素节
	for(var i = 0;i < nodes.length; i++){
		//<2>如果符合条件，添加到数组中
		if(nodes[i].className == classStr){
			ressult.push(nodes[i]);
		}
	}
	return ressult;
}

//获取当前样式的兼容函数
function getStyle(elem,attr){
	return elem.currentStyle ? elem.currentStyle[attr]:getComputedStyle(elem)[attr];
}

function removeSpanceNode2(parent){
	var nodes = parent.childNodes;
	for(var i = nodes.length - 1; i >= 0; i--){
		if(nodes[i].nodeType == 3 && /^\s+$/.test(nodes[i].nodeValue)){
			//删除该空白节点
			parent.removeChild(nodes[i]);
		}
	}
}

//删除空白节点
function removeSpaceNode(nodes){
	var result = []; //用来存放不是空白节点的节点的
	//判断是否是空白节点
	for (var i = 0; i < nodes.length; i++) {
		if(nodes[i].nodeType == 3 && /^\s+$/.test(nodes[i].nodeValue)){
			continue;
		}
		result.push(nodes[i]);
	}
	return result;
}










