import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './component/dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Dashboard>

      </Dashboard>
    </BrowserRouter>
  );
}

export default App;
