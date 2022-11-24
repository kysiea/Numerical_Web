import './App.css';
import { NavBar } from './NavBar';
import Bisection from './Methods/Bisection';
import FalsePosition from './Methods/FalsePosition';
import OnePoint from './Methods/OnePoint';
import NewtonRaphson from './Methods/NewtonRaphson';
import SecantMethod from './Methods/SecantMethod';
import CramersRule from './Methods/CramersRule';
import GaussElimination from './Methods/GaussElimination';
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import ApexChart from './Methods/chart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="chart" element={<ApexChart/>}/> 
        <Route path="BisectionMethod" element={<Bisection/>}/>  
        <Route path="FalsePosition" element={<FalsePosition/>}/> 
        <Route path="OnePointIterationMethod" element={<OnePoint/>}/> 
        <Route path="NewtonRaphsonMethod" element={<NewtonRaphson/>}/> 
        <Route path="SecantMethod" element={<SecantMethod/>}/> 
        <Route path="CramersRule" element={<CramersRule/>}/> 
        <Route path="GaussElimination" element={<GaussElimination/>}/> 
      </Routes>              
      </BrowserRouter>       
    </div>
  );
}
export default App;
