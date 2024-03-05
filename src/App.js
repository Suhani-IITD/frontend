import {BrowserRouter , Routes, Route} from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import Login from './pages/Login'
import Signup from './pages/SignUp'
import Navbar from './components/Navbar'
function App() {
  const { user } = useAuthContext()
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <div className="pages">
          <Routes>
          <Route 
              path="/" 
            />
          <Route 
              path="/login" 
              element={<Login /> } 
            />
            <Route 
              path="/signup" 
              element={<Signup />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
