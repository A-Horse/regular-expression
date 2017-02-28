import '../style/index.scss';

const textArea = window.document.querySelector('.test-text-input textarea');
const regInput = window.document.querySelector('.reg-exp-input input');
const resultArea = window.document.querySelector('.reg-exp-test-result');

window.document.querySelector('.test-button').addEventListener('click', () => {
  const text = textArea.value;
  const regString = regInput.value;

  const reg = new RegExp(regString, 'g');

  const result = text.replace(reg, (matched) => {
    return '<span class="matched-string">' + matched + '</span>';
  })

  resultArea.innerHTML = result;
});
