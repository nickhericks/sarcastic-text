const textarea = document.querySelector("[name='text']");
const result = document.querySelector('.result');
const filterInputs = document.querySelectorAll("[name='filter']");

console.log(textarea);
console.log(result);
console.log(filterInputs);



function transformText(text) {
	result.textContent = text;
}

transformText(textarea.value);

textarea.addEventListener('input', e => transformText(e.target.value));