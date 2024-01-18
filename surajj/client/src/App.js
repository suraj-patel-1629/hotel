//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route,Routes,Link } from 'react-router-dom';
import  HomeScreen  from './screens/HomeScreen';
import BookScreen from './screens/BookScreen';
import Register from './screens/Register';
import LoginScreen from './screens/LoginScreen';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
       <Routes>
      
      <Route path="/home" element= {<HomeScreen/>} />
      <Route path='/book/:roomid/:fromdates/:todates' element= {<BookScreen/>} />
      <Route path='/register' element= {<Register/>} />
      <Route path='/Login' element= {<LoginScreen/>} />
      </Routes> 
      </Router>


    </div>
  );
}

export default App;
