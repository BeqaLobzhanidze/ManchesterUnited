import './FirstPage.css'

export default function FirstPage() {
    return (
      <section id="hero" >
        <div className = "container" >
          <div id="information">
            <h1>Hello,<span></span></h1>
            <h1>This is Man United<span></span></h1>
            <h1>Web-Page<span></span></h1>
            <a href="https://ir.manutd.com/company-information/history.aspx#:~:text=The%20team%20first%20entered%20the,Old%20Trafford%2C%20our%20current%20stadium." type="button" target="_blank" id="history">HISTORY</a>
          </div>
        </div>
      </section>
    )
}