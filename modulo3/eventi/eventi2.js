const selectElement = document.querySelector('.ice-cream');

// selectElement.addEventListener('click', (event) => {
selectElement.addEventListener('change', (event) => {
  const result = document.querySelector('.result');
  result.textContent = `You like ${event.target.value}`;
  console.log(event.target);
  console.log(event);
});




// -----------------------


const mioInput = document.getElementById('mioInput');
const mettiQui = document.getElementById('mettiQui')
// const mioInput = document.getElementById('mioInput').value;

// mioInput.addEventListener('change', (event) => {
//     console.log(event.target.value);
//     mettiQui.innerHTML = event.target.value;
// })

const funzioneGenerica = function(event) {
  mettiQui.innerHTML = event.target.value;
}

mioInput.addEventListener('input', funzioneGenerica)
mettiQui.addEventListener('propertychange', funzioneGenerica)


// --------------------------

const source = document.getElementById('source');
const result = document.getElementById('result');

const inputHandler = function(e) {
  result.innerHTML = e.target.value;
}

source.addEventListener('input', inputHandler);
source.addEventListener('propertychange', inputHandler);


source.addEventListener()
