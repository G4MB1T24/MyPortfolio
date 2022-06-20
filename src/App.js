// import logo from './logo.svg';
import './App.css';
import AboutMe from './Components/AboutMe';
import MyprojectsHead from './Components/MyprojectsHead';
import Navbar from './Components/Navbar';
import Myprojects from './Components/Myprojects';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Linka from './Components/Linka';


function App() {
  let gitrepo1 = "https://github.com/G4MB1T24/TemperatureDjango"
  let gitrepo2 = "https://github.com/G4MB1T24/Matrimonial-DatingSite"
  let proj1site = "http://temperature-backend.herokuapp.com/"
  let proj2site = "https://matridatingsite.herokuapp.com/"
  return (
    <>
      <Router>
      <div className="App">
      <Navbar github="https://github.com/G4MB1T24"></Navbar>
      </div>
      <div className=''>
      <AboutMe></AboutMe>
      </div>
      <div>
        <MyprojectsHead></MyprojectsHead>
      </div>
      <div>
        <Myprojects proj1gitrepo={gitrepo1} proj1site={proj1site} proj2gitrepo={gitrepo2} proj2site={proj2site}></Myprojects>
      </div>
            <Linka></Linka>
      <Routes>
          <Route path="">
          </Route>
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
