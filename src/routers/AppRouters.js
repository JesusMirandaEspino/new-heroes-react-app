import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { Navbar } from '../components/ui/Navbar';


export const AppRouters = () => {
    return (
            <Router>
                <div>

                    <Navbar />

                    <Routes>

                        <Route  exact path="/login" element={ <LoginScreen />} />
                        <Route   path="/" element={ <MarvelScreen />} />

                    </Routes>
                </div>
            </Router>
    )
}
