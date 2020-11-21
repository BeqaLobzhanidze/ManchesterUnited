import './players.css';
import Marcus from '../Players-img/p176297.png';
import Degea from '../Players-img/p51940.png';
import hurry from '../Players-img/p95658.png';
import fred from '../Players-img/p101582.png';
import shaw from '../Players-img/p106760.png';
import bruno from '../Players-img/p141746.png';
import martial from '../Players-img/p148225.png';
import lindelof from '../Players-img/p184667.png';
import scot from '../Players-img/p195851.png';
import bissaka from '../Players-img/p214590.png';
import mason from '../Players-img/p220688.png';
import video from '../Videos/videoplayback.mp4'



export default function Players() {
  return (
    <section id="player">
      <div id="container">
        <div id="header">
          <h1>PLAYERS</h1>
        </div>
        <div id="all-projects">
          <div id="project-item">
            <div id="player-name">
              <h1>David De Gea</h1>
              <h2>Country : Spain</h2>
              <h2>Age : 30</h2>
            </div>
            <div id="image">
              <a href="https://en.wikipedia.org/wiki/David_de_Gea" target = "_blank"><img src={Degea} alt="img"/></a>
            </div>
          </div>
          <div id="project-item">
            <div id="player-name">
              <h1>Victor Lindelof</h1>
              <h2>Country : Sweden</h2>
              <h2>Age : 26</h2>
            </div>
            <div id="image">
              <a href="https://en.wikipedia.org/wiki/Victor_Lindel%C3%B6f" target="_blank"><img src={lindelof} alt="img"/></a>
            </div>
          </div>
          <div id="project-item">
            <div id="player-name">
              <h1>Hurry Maguire</h1>
              <h2>Country : England</h2>
              <h2>Age : 27</h2>
            </div>
            <div id="image">
              <a href="https://en.wikipedia.org/wiki/Harry_Maguire" target="_blank"><img src={hurry} alt="img"/></a>
            </div>
          </div>
          <div id="project-item">
            <div id="player-name">
              <h1>Aaron Wan-Bissaka</h1>
              <h2>Country : England</h2>
              <h2>Age : 22</h2>
            </div>
            <div id="image">
              <a href="https://en.wikipedia.org/wiki/Aaron_Wan-Bissaka" target="_blank"><img src={bissaka} alt="img"/></a>
            </div>
          </div>
          <div id="project-item">
            <div id="player-name">
              <h1>luke Shaw</h1>
              <h2>Country : England</h2>
              <h2>Age : 25</h2>
            </div>
            <div id="image">
              <a href="https://en.wikipedia.org/wiki/Luke_Shaw" target="_blank"><img src={shaw} alt="img"/></a>
            </div>
          </div>
          <div id="project-item">
            <div id="player-name">
              <h1>Scott Mctominay</h1>
              <h2>Country : Scotland</h2>
              <h2>Age : 23</h2>
            </div>
            <div id="image">
            <a href="https://en.wikipedia.org/wiki/Scott_McTominay" target="_blank"><img src={scot} alt="img"/></a>
            </div>
          </div>
          <div id="project-item">
            <div id="player-name">
              <h1>Fred</h1>
              <h2>Country : Brazil</h2>
              <h2>Age : 27</h2>
            </div>
            <div id="image">
              <a href="https://en.wikipedia.org/wiki/Fred_(footballer,_born_1993)" target="_blank"><img src={fred} alt="img"/></a>
            </div>
          </div>
          <div id="project-item">
            <div id="player-name">
              <h1>Bruno Fernandes</h1>
              <h2>Country : Portugal</h2>
              <h2>Age : 26</h2>
            </div>
            <div id="image">
              <a href="https://en.wikipedia.org/wiki/Bruno_Fernandes" target="_blank"><img src={bruno} alt="img"/></a>
            </div>
          </div>
          <div id="project-item">
            <div id="player-name">
              <h1>Marcus Rashford</h1>
              <h2>Country : England</h2>
              <h2>Age : 23</h2>
            </div>
            <div id="image">
              <a href="https://en.wikipedia.org/wiki/Marcus_Rashford" target="_blank"><img src={Marcus} alt="" /></a>
            </div>
          </div>
          <div id="project-item">
            <div id="player-name">
              <h1>Mason Greenwood</h1>
              <h2>Country : England</h2>
              <h2>Age : 19</h2>
            </div>
            <div id="image">
              <a href="https://en.wikipedia.org/wiki/Mason_Greenwood" target="_blank"><img src={mason} alt="img"/></a>
            </div>
          </div>
          <div id="project-item">
            <div id="player-name">
              <h1>Anthony Martial</h1>
              <h2>Country : France</h2>
              <h2>Age : 24</h2>
            </div>
            <div id="image">
              <a href="https://en.wikipedia.org/wiki/Anthony_Martial" target="_blank"><img src={martial} alt="img"/></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}