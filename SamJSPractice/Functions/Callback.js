/*function sum(Num1,Num2){
    let sumValue=Num1+Num2;
    return sumValue;
}

let Value= sum(3,7);
console.log(Value);*/
//CALLBACKS
//first function
function sum(Num1,Num2,fnToCall){
    let result=Num1+Num2;
    fnToCall(result);
}
//second function
function displayResult(data){
    console.log("Result of the sum is:"+data);
}
//third function
function displayResultPassive(data){
    console.log("The sum's result is:"+data);
}
let ans=sum(4,6,displayResult);
/*There is a direct comparison between fnToCall and displayResult.
fnToCall==displayResult => fnToCall(result)==displayResult(data)
That's why when the result comes out, it is used as the value of data and the second function is run displaying the solution on the screen.*/