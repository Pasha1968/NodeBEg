var count = require('./array');

console.log(count([1,6,23,165,12]));


var x = 0;
var printT = function(){
	console.log("T");
};
function call(test){
	test();
}
function test(){
	console.log("test");
}



console.log("Hello world!");
console.log(__dirname)

if (x == 0)
	console.log("it's alive")
for (var i = 0;i < 6; i++)
	console.log(i);
setTimeout(function(){console.log("End")},2000);
test();

printT();

call(test);