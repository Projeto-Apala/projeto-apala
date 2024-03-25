import React from 'react';
import Home from './Home/Home';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} index />
                <Route path="/Home" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;

