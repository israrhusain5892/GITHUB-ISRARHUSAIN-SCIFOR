import logo from './logo.svg';
import './App.css';
import nav from './components/nav';
import FunctionComponent from './components/FunctionComponent';
import MyclassComponent from './components/MyclassComponent';
import Student from  './components/Student';

function App() {
  return (
    <div className="App">
        {/* <h1>Done by Function component:</h1> */}
        {/* <FunctionComponent/> */}
        {/* <h1>Done by Class component :</h1> */}
       {/* < MyclassComponent /> */}
       <Student name="mran" rollno="786" address="delhi"/>
         {/* <h1>welcome to first react js app</h1> */}
    </div>
  );
}

export default App;
