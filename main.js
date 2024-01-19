var CalculateAge= function(currentYear, birthYear){ return currentYear-birthYear};
function secondFunction(){
var result;
result = CalculateAge(2023,1997);
console.log(result);
}
secondFunction();

function simpleInt(borrowed, rate, noOfYrs, hundred)
{
	var full;
	full = borrowed * rate * noOfYrs / hundred + borrowed;
	return full;
}
function secFunc()
{
	var result;
	result = simpleInt(1000, 5, 2, 100);
	console.log(result );
}
secFunc();

function wordCount()
{
	var full;
	full ="Hello dear"
	console.log(full.trim().length);
}
wordCount();

function yrOfBirth(){
	let birthYr;
	const age= 30;
	const currentYr=2024;

	birthYr=currentYr-age;
	console.log(birthYr)
}
yrOfBirth();

function yearOfBirth(crntYear,crntAge){
	return crntYear-crntAge;
}
console.log(yearOfBirth(2024,30));

function primeNumberCheck(number){
	if(number<2){
		return false;
	}
	for(let i=2; i<=Math.sqrt(number); i++){
		if(number % i===0){
			return false;
		}
	}
	return true;
}
let number= 6;
console.log(`${number} is prime:`, primeNumberCheck(number));

function sumOfDigits(n1,n2){
 	let sumT=n1-n2;
 	console.log(sumT);	
}
sumOfDigits(24,20);

function sumOfDigit(no1,no2){
	return no1-no2;
}
console.log(sumOfDigit(24,20));
function summationOfDigit(numbs=2420){
	let summationT = numbs
        .toString()
        .split('')
        .map(Number)
        .reduce(function (a, b) {
            return a + b;
        }, 0);

	console.log(summationT);
}
summationOfDigit();

function summationD(numerals){
	let summationT = numerals
        .toString()
        .split('')
        .map(Number)
        .reduce(function (a, b) {
            return a + b;
        }, 0);

	console.log(summationT);
}
summationD(2420);