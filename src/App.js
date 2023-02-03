import './App.css';

function App() {
  return (
    <div className='Main'>
      <h2 id='num'></h2>
      <p className='question-block'></p>
      <div className='option-block'>
        <p className='option' onClick={quizSetup}>
          A.
          <span className='option-text'></span>
        </p>
        <p className='option'>
          B.
          <span className='option-text'></span>
        </p>
        <p className='option'>
          C.
          <span className='option-text'></span>

        </p>
        <p className='option'>
          D.
        <span className='option-text'></span>

        </p>
      </div>
    </div>
  )
}
const optionText = document.querySelectorAll('.option-text');
const options = document.querySelectorAll('.option');
const question = document.getElementsByClassName('question-block')[0];
const number = document.getElementById('num');
const questions = [
  ['What is 2 + 2 ?'],
  ['What is 10 x 10 ?'],
  ['What is 33 - 11 ?'],
  ['What number comes before 8 ?'],
  ['What is 200 ÷ 8 ?']
];
let count = 1;
let num = 0;
number.textContent = `${count}.`;
question.textContent = questions[0];
const option = [
  [4, 5, 6, 7],
  [40, 500, 100, 110],
  [20, 21, 22, 23],
  [42, 25, 36, 27]
];
optionText.forEach((opt, index) => {
  opt.textContent = option[num][index];
})
function quizSetup() {
  if(num < questions.length-1) {
    setTimeout(() => {
      num+=1;
      count+=1;
      question.textContent = questions[num];
      number.textContent = `${count}.`;
      optionText.forEach((opt, index) => {
        opt.textContent = option[num][index];
      })
    }, 2000)
  }
}
export default App;
