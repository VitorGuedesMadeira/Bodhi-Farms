import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import firstPage from './pages/firstPage/firstPage';
import secondPage from './pages/secondPage/secondPage';
import thirdPage from './pages/thirdPage/thirdPage';

// styles
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={firstPage()} />
        <Route path="secondPage" element={secondPage()} />
        <Route path="thirdPage" element={thirdPage()} />
      </Routes>
    </div>
  );
}

export default App;
