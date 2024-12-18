import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Cat from './Pages/Cat';
import CatSingle from './Components/CatSingle';
import Bookings from './Pages/Bookings';

function App() {
  return (
    <Router>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Bookings' element={<Bookings/>}/>
        <Route path='/CatSingle/:id' element={<CatSingle/>}/>
        <Route path='/CatsAll' element={<Cat/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
