import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import SelectionPage from './pages/SelectionPage';
import PGPage from './pages/PGPage';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<SelectionPage />} />
                <Route path="/boys" element={<PGPage variantKey="boys" />} />
                <Route path="/girls" element={<PGPage variantKey="girls" />} />
            </Routes>
        </Router>
    );
}

export default App;
