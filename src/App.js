import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Screens/admin/Home';
import './Assets/Styling/main.css'
import 'react-tabs/style/react-tabs.css';


function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
      </BrowserRouter >
    </div>
  );
}

export default App;
