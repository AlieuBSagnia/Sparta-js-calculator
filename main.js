alert ("please select which calculator you want to use (1) - Basic , (2) Advance or (3) - BMI") ;
var selection = prompt("which one");


if(selection =="1"){
    alert ("Basic calculator")
    var firstNumber = prompt("Please enter your first number");
    var operator = prompt( "Please select one operator:  (+) = add , (-) = subtract ,(*) = multiple ,  (/) = divide ");
    var secondNumber = prompt("Please enter your second number");
    var answer
    
    if(firstNumber && secondNumber){
        if (operator == "+") {
        answer= Number (firstNumber) + Number(secondNumber);
        alert ("Answer = " + firstNumber + " " + operator + " " + secondNumber + " = " + answer );
        }else if(operator == "-") {
            answer= Number (firstNumber) - Number(secondNumber);
            alert ("Answer = " + firstNumber + " " + operator + " " + secondNumber + " = " + answer );

        }else if(operator == "*") {
            answer= Number (firstNumber) * Number(secondNumber);
            alert ("Answer = " + firstNumber + " " + operator + " " + secondNumber + " = " + answer ); 
        }else if (operator == "/") {
            answer= Number (firstNumber) / Number(secondNumber);
            alert ("Answer = " + firstNumber + " " + operator + " " + secondNumber + " = " + answer ); 
        }
    }else {
        alert (" Please follow steps again ");
        
    }
}else if (selection =="2"){
    alert ("Advance calculator");
    
    var advOperator = prompt("Please select one operator: (**) = power of , (sqrt) = square root");
    var answer
    

        if(advOperator == "**"){
            var firstNumber = prompt("Please enter your first number");
            var secondNumber = prompt("Please enter your second number");
            answer = Number (firstNumber) ** Number(secondNumber);
            alert ("Power of = " + firstNumber + " & "  + secondNumber + " = " + answer);
        }else if(advOperator == "sqrt"){
            var firstNumber = prompt("Please enter your first number");
            answer = Math.sqrt (Number(firstNumber));
            alert ("Square of = " + firstNumber + " is " + " = " + answer);
        }else{
            alert (" Please follow steps again")
        }
        
}else if (selection =="3"){
    alert ("BMI calculator");
    var selectionMeasuring = prompt(" 1 = metric or 2 = imperial");
    var answer

    if (selectionMeasuring == "1"){
        var height = prompt("meters");
        var weight = prompt("kilogram");
        if(height && weight){
        answer = weight /(height*height)
        alert ("BMI = " + height + weight + "=" + answer);

        }else if (selectionMeasuring == "2"){
            var height = prompt("inches");
            var weight = prompt("pounds");
            if(height && weight){
                answer = 703 * weight/(height*height);
                alert("BMI = " + height + weight +  " = " + answer)
            }
        
        
        }   
    } 
}else{
    alert (" Please follow steps again")
}

