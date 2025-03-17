import './Header.css'
const reactDesc = ["Fundamental", "Crucial", "Core"];
import reactImage from '../../assets/components.png'

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1))
}


export default function Header() {
    const description = reactDesc[getRandomInt(2)];
    return (
      <header>
        <img src={reactImage} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    )
  }
  