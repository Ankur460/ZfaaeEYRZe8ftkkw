
import './App.css';
import BMI_Calculator from './components/BMI_Calculator';
import Candidate_Details from './components/Candidate_Details';
import NavBar from './components/NavBar';
import {BrowserRouter ,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <NavBar/>
       <Routes>
        <Route path='/ZfaaeEYRZe8ftkkw/candidate_details' element={<Candidate_Details/>}/>
        <Route path='/ZfaaeEYRZe8ftkkw/BMI_Calculator' element={<BMI_Calculator/>}/>
       </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
