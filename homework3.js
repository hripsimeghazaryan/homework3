// Number 1
const oneone = function(a, b, c){
     return (a-b)/c;
};
const theResult = oneone(90, 10, 2)
console.log(theResult);


// Number 2
const loki = function(){
        return "I am alive";
};
console.log(Loki());


// Number 3
const height = {ft: 6};
const needft = 1;
const finalHeight = function(){
	height.ft = height.ft + needft;
};
finalHeight();
console.log(height.ft);


// Number 4 
const first = "boolean operators";
const second = "binary numbers";
const third = "functions";
const compare = function(first, second, third){
    if (first.length > second.length){
	   if (first.length > third.length){ 
		   return first;
	    }
    }
        else if (second.length > third.length){
	        return second;
    }
        else { return third; }
    }
const verj = compare(first, second, third);
console.log(verj);


// Number 5
const numberOne = 14;
const numberTwo = 15-1;
const againCompare = function(a, b){
   if(a === b){
   	return 0;
   }
   else if(a > b){
    return 1;
   }
   else{
   	return -1;
   }
};
const yay = againCompare(numberOne, numberTwo);
console.log(yay);


// Number 6
const mult = function(a, b){
    return a*b;
};
mult();
console.log(mult(13, 12));


// Number 7 
const div = function(a, b){
	return a/b;
};
div();
console.log(div(12, 2));


// Number 8
const Tarea = function(base, height){
     return div(mult(base, height), 2);
};
console.log(Tarea(10, 8));


// Number 9 
const numLength = function(number){
	const string = number + '';
	return string.length;
};
const exampleNum = numLength(2012);
console.log(exampleNum);


// Number 10
const string1 = " Iron Man ";
const string2 = " Batman ";
const number01 = 12;
const wowCompare = function(a, b, c){
	if((a.lenght + b.lenght) === c) {
		return 1;
	} else{ return -1;}
};
const attempt = wowCompare(string1, string2, number01);
console.log(attempt);


// Number 11
const runStuff = function(str, n1, n2){
    if (str === "rectangle"){
    	const RecArea = n1 * n2;
    	return RecArea;
    }
    else if(str === "triangle"){
    	return Tarea(n1, n2);
    }
    else{
    	return -1;
    }
};
const check = runStuff("rectangle", 14, 16);
console.log(check);
















// 
