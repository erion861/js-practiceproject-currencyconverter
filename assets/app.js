// DOM ACCESS

const input = document.getElementById('input');
const btn = document.getElementById('btn');
const result = document.getElementById('result');
const reset = document.getElementById('reset');
const currency = 
{
'EUR': {'GBP': 0.87, 'USD': 1.21, 'EUR': 1}, 
'USD': {'GBP': 0.72, 'EUR': 1.2, 'USD': 1},
'GBP': {'EUR': 1.16, 'USD': 1.4, 'GBP': 1}
};

console.log(reset);

// FUNCTION
 
function convert(event) {
  event.preventDefault();
  let value = input.value;
  let basecurrency = document.querySelector('input[name="from"]:checked')?.value;
  let desiredcurrency = document.querySelector('input[name="to"]:checked')?.value;
  let convertedAmount = 0;
  if (basecurrency == undefined || desiredcurrency == undefined || 
    basecurrency === '' || desiredcurrency === '') {
    result.innerText = 'Please select currencies';
    reset.style.display = 'grid';
    btn.style.display = 'none';
    return;
  } else {
    convertedAmount = value * currency[basecurrency][desiredcurrency];
  }
  if (value === '' || isNaN(value)) {
    result.innerText = 'Please enter a valid number';
    reset.style.display = 'grid';
    btn.style.display = 'none';
  } else {
    result.innerText = `The desired amount is ${convertedAmount.toFixed(2)} in ${desiredcurrency}.`;
    reset.style.display = 'grid';
    btn.style.display = 'none';
  };
};

function refresh() {
  location.reload();
}

// EVENTLISTENER

btn.addEventListener('click', convert);
reset.addEventListener('click', refresh)