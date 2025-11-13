let runButton = document.querySelector('#pg-run');
let resetButton = document.querySelector('#pg-reset');
let resultRow = document.querySelector('#pg-row');

function runCountingLoop() {
    resultRow.innerHTML = '';
    
 
    let start = Number(document.querySelector('#pg-start').value);
    let end = Number(document.querySelector('#pg-end').value);
    let step = Number(document.querySelector('#pg-step').value);
    
 
    for (let i = start; (step > 0) ? (i <= end) : (i >= end); i += step) {
        resultRow.insertAdjacentHTML('beforeend', `<span class="chip">${i}</span> `);
    }
}

function resetResults() {
    resultRow.innerHTML = '';
}

runButton.addEventListener('click', runCountingLoop);
resetButton.addEventListener('click', resetResults);