import { HashRouter, Routes, Route, } from 'react-router'
import './App.css'
const Home = () => <h1>Home</h1>;

const App = () => {

  return (
    <div>
      <HashRouter>
        <Routes>
          <Route 
            path='/'
            element={
              <Home />
            }
          />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
