let hasOperator = true;
let hasDot = false;

function onClick(simbolo){
    let visor = document.calc.visor.value;
    temOperador = false;
    if(!visor.includes("=")){
        document.calc.visor.value += simbolo;
    }else{
        document.calc.visor.value = simbolo;
    }
    hasOperator = false;
    hasDot = false;
}

function onClear(simbolo){
    let visor = document.calc.visor.value;
    if(simbolo == "C"){
        document.calc.visor.value = "";
        temOperador = false;
    }else if(simbolo == "Del"){
        document.calc.visor.value = document.calc.visor.value.slice(0, -1);
    }
}

function calculate(){
    let visor = document.calc.visor.value;
    if(!visor.includes("=")){
        document.calc.visor.value += " = " + eval(visor);
    }
}

function operator(simbolo){
    let visor = document.calc.visor.value;  
    if(hasOperator)
        return;
    if(!visor.includes("=")){
        document.calc.visor.value += simbolo;
        hasOperator = true;
    }else if(simbolo == "+" || simbolo == "-"){

        document.calc.visor.value = simbolo;
        hasOperator = true;
        
    }
}

function dot(){
    if(!hasDot){
        document.calc.visor.value += ".";
        hasDot = true;
    }
    
}
