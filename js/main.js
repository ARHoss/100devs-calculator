// Event Listeners
window.addEventListener('keydown', calculate);

const symbols = document.querySelectorAll('span');
for(let symbol of symbols){
    symbol.addEventListener('transitionend', removeTransition);
}

function calculate(e){

    const symbol = document.querySelector(`span[data-key='${e.keyCode}']`);
    const result = document.querySelector('#mathResult');

    if(!symbol){//If other key are pressed return
        return;
    }

    symbol.classList.add('mathSymbolClick');

    // Calculation
    let num1;
    let op;
    let num2;

    if(symbol.textContent != '='){
        result.textContent += symbol.textContent;
    }else{
        let resultCal = result.textContent;
        resultCal = resultCal.split('');

        for (let i = 0; i < resultCal.length; i++) {
            
            if(resultCal[i] == '+' ||
            resultCal[i] == '-' ||
            resultCal[i] == '/' ||
            resultCal[i] == 'x'
            ){
                op =resultCal[i] == 'x'?'*':resultCal[i];
                num1 = num1?? +resultCal.splice(0,i).join('');
                num2 = num2?? +resultCal.splice(1,resultCal.length-1).join('');
            }
                        
        }

        if(op == '+'){
            result.textContent = num1+num2;
        }else if(op == '-'){
            result.textContent = num1-num2;
        }else if(op == '*'){
            result.textContent = num1*num2;
        }else if(op == '/'){
            result.textContent = num1/num2;
        }else{
            result.textContent = NaN;
        }
        
        
    }
    



    

}

function removeTransition(e){

    
    if(e.propertyName == 'background-color'){
       
        this.classList.remove('mathSymbolClick');
    }
    
}
