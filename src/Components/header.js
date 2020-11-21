import React , {Component} from "react"
import './header.css'
import manutd from '../Players-img/icons8-manchester-united-48.png'

export default class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      boolean : false
    }
  }

  chnageValue = () => {
    let command = document.getElementById("hambLine");
     this.setState({
       boolean: !this.state.boolean 
     })
     if(this.state.boolean) {
       command.className = "blue"
     } else {
       command.className = "red"
     }
  }
  buttonClicked = () => {
    
      let test = document.getElementById("hambLine");
    if(this.state.boolean) {
      
      this.setState({
        boolean: !this.state.boolean 
      }) 
      test.className = "blue"
    } 
  }

  render() {
    let bottom = this.state.boolean ? "0" : "100%" ;
    return( 
      <section id="headerHamburger">
        <div id="navbar">
          <div id="team">
            <img src={manutd} alt="manutd" />
          </div>
          <div id="hamburger" onClick = {this.chnageValue}>
            <div id="hambLine" >
  
            </div>
          </div>
          <div id="navlist">
            <ul style = {{"left" : bottom}}>
              <li onClick = {this.buttonClicked}><a href="#hero" data= "Home">Home</a></li>
              <li onClick = {this.buttonClicked}><a href="#history" data="History">History</a></li>
             <li onClick = {this.buttonClicked}> <a href="#all-projects" data="Lineups">Lineups</a></li>
              <li onClick = {this.buttonClicked}><a href="#header" data="Players">Players</a></li>
              <li onClick = {this.buttonClicked}><a href="#containerjs" data="Championships">Championships</a></li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
}