const textarea = document.querySelector("[name='text']");
const result = document.querySelector('.result');
const filterInputs = document.querySelectorAll("[name='filter']");


const filters = {
  sarcastic(letter, index) {
    if (index % 2 == 0) {
      // if even return uppercase letter
      return letter.toUpperCase();
    }
    // else return lowercase letter
    return letter.toLowerCase();
  },
  funky() {},
  unable() {},
};


function transformText(text) {
	// take text and loop over each letter
	const mod = Array.from(text).map(filters.sarcastic);
	result.textContent = mod.join('');
}


transformText(textarea.value);
textarea.addEventListener('input', e => transformText(e.target.value));