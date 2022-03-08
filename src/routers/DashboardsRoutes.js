import React from 'react';
import { NavBar } from '../components/ui/NavBar';
// This is a React Router v6 app
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroesScreen } from '../components/heroes/HeroesScreen';
import { DcScreen } from '../components/dc/DcScreen';

export const DashboardsRoutes = () => {
    return (
        <div>

            <NavBar />

                    <Routes>
                        <Route path="/marvel"  element={ <MarvelScreen /> } />
                        <Route   path="/heroe/:heroeid"  element={ <HeroesScreen /> } />
                        <Route  path="/cd"  element={ <DcScreen /> } />
                    </Routes>
        </div>
    )
}
