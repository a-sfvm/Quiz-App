import quizLogo from '../assets/chimp.png';

export default function Header() {
  return (
    <header>
      <img src={quizLogo} alt="Quiz logo" />
      <h1>ChimpQuiz</h1>
    </header>
  )
}
