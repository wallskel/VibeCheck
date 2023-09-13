import './App.css';
import Navigation from './components/Navigation';
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import VibeCheckPage from './pages/VibeCheckPage';
import PastVibesPage from './pages/PastVibesPage';
import ViewVibePage from './pages/ViewVibePage';
import EditVibePage from './pages/EditVibePage';
import CalendarPage from './pages/CalendarPage';

function App() {

  const [dateToView, setDateToView] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/VibeCheck" element={<VibeCheckPage />}></Route>
            <Route path="/PastVibes" element={<PastVibesPage setDateToView={setDateToView}/>}></Route>
            <Route path="/ViewVibe" element = {<ViewVibePage dateToView={dateToView} />}></Route>
            <Route path="/EditVibe" element = {<EditVibePage dateToView = {dateToView} />}></Route>
            <Route path="/calendar" element = {<CalendarPage />}></Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
};

export default App;

