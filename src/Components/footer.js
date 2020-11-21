import './footer.css'
import manutd from '../Players-img/icons8-manchester-united-48.png'
import premier from "../Players-img/icons8-the-premier-league-48.png"
import england from "../Players-img/icons8-england-96.png"

export default function Footer() {
  return (
    <section className = "footer">
      <div id = "containerjs">
        <a id="foo1" href="https://www.manutd.com/" target="_blank"><img id="foo11" src= {manutd} alt="manutd"/></a>
        <h1>MANCHESTER UNITED</h1>
        <a id="foo2" href="https://www.premierleague.com/matchweek/5672/blog" target="_blank"><img id="foo22" src= {premier} alt="premir league"/></a>
        <a id="foo3" href="https://www.thefa.com/" target="_blank"><img id="foo33" src= {england} alt="england"/></a>
      </div>
    </section>
  )
}