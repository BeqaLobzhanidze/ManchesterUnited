import FirstPage from "./Components/firstPage"
import Players from "./Components/players"
import Footer from "./Components/footer.js"
import Header from './Components/header'
import './Components/App.css'

function App() {
  return (
    <div className = "App">
      <Header />
       <FirstPage />
       <Players />
       <Footer />
    </div>
  );
}

export default App;
