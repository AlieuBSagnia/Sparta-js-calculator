alert ("please select which calculator you want to use (1) - Basic , (2) or 3 - BMI") ;
var selection = prompt("which one");


if(selection =="1"){
    var firstNumber = prompt("first");
    var operator = prompt(" + , - ,* , / ");
    var secondNumber = prompt("second");
    var answer
    alert ("basic")
    if(firstNumber && secondNumber){
        if (operator == "+") {
        answer= Number (firstNumber) + Number(secondNumber);
        alert ("Answer = " + firstNumber + " " + operator + " " + secondNumber + "=" + answer );
        }else if(operator == "-") {
            answer= Number (firstNumber) - Number(secondNumber);
            alert ("Answer = " + firstNumber + " " + operator + " " + secondNumber + answer );

        }else if(operator == "*") {
            answer= Number (firstNumber) * Number(secondNumber);
            alert ("Answer = " + firstNumber + " " + operator + " " + secondNumber + answer ); 
        }else if (operator == "/") {
            answer= Number (firstNumber) / Number(secondNumber);
            alert ("Answer = " + firstNumber + " " + operator + " " + secondNumber + answer ); 
        }
    }else {
        alert (" Please again")
    }
}else if (selection =="2"){
    alert ("advance")
    var firstNumber = prompt("first");
    var advoperator = prompt("** , sqrt");
    var answer
    
    if (firstNumber || secondNumber){
        if(advoperator == "**"){
            var secondNumber = prompt("second");
            answer = Number (firstNumber ** Number(secondNumber));
            alert ("Answer = " + firstNumber + " " + advoperator + " " + secondNumber + "=" + answer);
        }else if(advoperator == "sqrt"){
            answer = Math.sqrt (Number(firstNumber));
            alert ("Square of = " + firstNumber +" is " + "=" + answer);
        }else{
            alert (" Please again")
        }
        
    }
}else if (selection =="3"){
    alert (BMI)
    var selectionMeasuring = prompt(" 1 = metric or 2 = imperial");
    var answer

    if (selectionMeasuring == "1"){
        var height = prompt("inches");
        var weight = prompt("pounds");
        if(height && weight){
        answer = weight /(height*height)
        alert ("BMI = " + height + weight + "=" + answer);

    }else if (selectionMeasuring == "2"){
        var height = prompt("inches");
        var weight = prompt("pounds");

    } 
}
}

