import { Route, Routes } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect, useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import firstPage from './pages/firstPage/firstPage';
import secondPage from './pages/secondPage/secondPage';
import thirdPage from './pages/thirdPage/thirdPage';
import option1 from './pages/option1/option1';
import option2 from './pages/option2/option2';
import option3 from './pages/option3/option3';
import loading from './assets/favicon/weed-icon.png';

// styles
import './App.css';
import './darkmode/darkmode.css';

AOS.init();

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoading(true), 3000);
  }, []);

  return (
    <>
      {
        isLoading
          ? (
            <div className="App">
              <Navigation />
              <Routes>
                <Route path="/" element={firstPage()} />
                <Route path="secondPage" element={secondPage()} />
                <Route path="thirdPage" element={thirdPage()} />
                <Route path="option1" element={option1()} />
                <Route path="option2" element={option2()} />
                <Route path="option3" element={option3()} />
              </Routes>
              <Footer />
            </div>
          )
          : (
            <div className="loading-page">
              <img src={loading} alt="loading" />
            </div>
          )
      }
    </>
  );
}

export default App;
