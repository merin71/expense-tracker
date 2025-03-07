import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import { Route, Routes } from 'react-router-dom';
import "@fontsource/poppins";
import "@fontsource/poppins/100.css"; 
import "@fontsource/poppins/100-italic.css";
import "@fontsource/poppins/200.css"; 
import "@fontsource/poppins/200-italic.css";
import "@fontsource/poppins/300.css"; 
import "@fontsource/poppins/400-italic.css";
import "@fontsource/poppins/400.css"; 
import "@fontsource/poppins/400-italic.css";
import "@fontsource/poppins/500.css"; 
import "@fontsource/poppins/500-italic.css";
import "@fontsource/poppins/600.css"; 
import "@fontsource/poppins/600-italic.css";
import "@fontsource/poppins/700.css"; 
import "@fontsource/poppins/700-italic.css";
import "@fontsource/poppins/800.css"; 
import "@fontsource/poppins/800-italic.css";
import "@fontsource/poppins/900.css"; 
import "@fontsource/poppins/900-italic.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path= '/' element = {<LandingPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
