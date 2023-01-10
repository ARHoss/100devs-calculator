// Event Listeners
window.addEventListener('keydown', calculate);

const symbols = document.querySelectorAll('span');
for(let symbol of symbols){
    symbol.addEventListener('transitionend', removeTransition);
}

function calculate(e){

    const symbol = document.querySelector(`span[data-key='${e.keyCode}']`);

    if(!symbol){//If other key are pressed return
        return;
    }

    symbol.classList.add('mathSymbolClick');

    

}

function removeTransition(e){

    
    if(e.propertyName == 'background-color'){
       
        this.classList.remove('mathSymbolClick');
    }
    
}
