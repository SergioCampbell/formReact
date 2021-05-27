import './App.css';
import Navbar from './components/navbar'
import Home from './pages/home'
import Contact from './pages/contacto'
import Footer from './components/footer'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>

      <Navbar/>

        <Switch>

          <Route path="/home" exact>
            <Home/>
          </Route>

          <Route path="/contact" >
            <Contact/>
          </Route>

        </Switch>
      
      <Footer/>
    </Router>
  );
}

export default App;
