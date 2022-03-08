import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { NavBar } from '../components/ui/NavBar';
import { DashboardsRoutes } from './DashboardsRoutes';


export const AppRouters = () => {
    return (
        <div>
            <Router>
                    <Routes>
                        <Route  exact path="/login" element={ <LoginScreen />} />
                        <Route   path="/" element={ <DashboardsRoutes />} />
                    </Routes>

            </Router>
        </div>

    )
}
