let runButtons = document.querySelectorAll('.run'); // Select all elements with class 'run'
let resetButtons = document.querySelectorAll('.reset'); // Select all elements with class 'reset'
let resultRow = document.querySelector('#pg-row');


function runCountingLoop() {
  console.log('whoo');
  // Clear only the playground resultRow if this function is called from the playground 'Run' button
  // For other cards, you might want to clear their specific result-row
  const currentResultRow = this.closest('.card-body').querySelector('.result-row');
  currentResultRow.innerHTML = '';
  currentResultRow.classList.remove('hint');


  // Assuming start, end, step, and filter values are specific to each card or globally defined for the playground
  // For the playground, use its input fields
  let start = Number(this.closest('.card-body').querySelector('#pg-start') ? this.closest('.card-body').querySelector('#pg-start').value : 1); // Default to 1 if not playground
  let end = Number(this.closest('.card-body').querySelector('#pg-end') ? this.closest('.card-body').querySelector('#pg-end').value : 15); // Default to 15 if not playground
  let step = Number(this.closest('.card-body').querySelector('#pg-step') ? this.closest('.card-body').querySelector('#pg-step').value : 1); // Default to 1 if not playground
  let filter = this.closest('.card-body').querySelector('#pg-filter') ? this.closest('.card-body').querySelector('#pg-filter').value : 'none'; // Default to 'none' if not playground


  // Logic for cards with predefined values (adjust as needed based on your HTML structure for cards)
  const cardTitle = this.closest('.card-body').querySelector('h2').textContent;
  if (cardTitle.includes('Count Up 1 → 15')) {
    start = 1; end = 15; step = 1; filter = 'none';
  } else if (cardTitle.includes('Count Up 15 → 1')) {
    start = 15; end = 1; step = -1; filter = 'none'; // Assuming step is -1 for counting down
  } else if (cardTitle.includes('Count Up 1 → 30')) {
    start = 1; end = 30; step = 1; filter = 'odd';
  } else if (cardTitle.includes('Multiples of 5 (30 → 0)')) {
    start = 30; end = 0; step = -5; filter = 'mul5';
  } else if (cardTitle.includes('Full Range (−50 → 50)')) {
    start = -50; end = 50; step = 5; filter = 'none';
  } else if (cardTitle.includes('Multiples of 2 (-50 → 50)')) {
    start = -50; end = 50; step = 2; filter = 'even'; // Assuming step is 2 for multiples of 2
  }


  for (let i = start; (step > 0) ? (i <= end) : (i >= end); i += step) {
    let shouldAdd = true;
    if (filter === 'odd' && i % 2 === 0) {
      shouldAdd = false;
    } else if (filter === 'even' && i % 2 !== 0) {
      shouldAdd = false;
    } else if (filter === 'mul5' && i % 5 !== 0) {
      shouldAdd = false;
    }


    if (shouldAdd) {
      currentResultRow.insertAdjacentHTML('beforeend', `<span class="chip">${i}</span> `);
    }
  }
}


function resetResults() {
  const currentResultRow = this.closest('.card-body').querySelector('.result-row');
  currentResultRow.innerHTML = '';
  currentResultRow.classList.add('hint');
}


// Attach event listeners to all "Run" buttons
runButtons.forEach(button => {
  button.addEventListener('click', runCountingLoop);
});


// Attach event listeners to all "Reset" buttons
resetButtons.forEach(button => {
  button.addEventListener('click', resetResults);
});
