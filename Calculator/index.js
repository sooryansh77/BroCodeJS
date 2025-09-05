// Calculator Program

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
            let expression = display.value;
            if(expression.includes("%")){
                expression = expression.replace(/(\d+(\.\d+)?)%/g, "($1 * 0.01)");
            }
            display.value = eval(expression);
        
    }
    catch(error){
        display.value = "Error";
    }
}