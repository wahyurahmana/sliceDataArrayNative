function slice(data, start, end){
	let arrLength = data.length;
	let tempArr = []

	if (start > arrLength) {
		return tempArr
	}else if(start ===  undefined){
		return data;
	}else if(end === undefined || end > arrLength){
		for(let i = start; i < arrLength ;i++){
			tempArr.push(data[i])
		}
	}else{
		for(let i = start; i < end;i++){
			tempArr.push(data[i])
		}
	}
	return tempArr;
}

console.log(slice(['ant','bison','camel','duck','elephant'],4,5))