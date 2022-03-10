import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { DcScreen } from '../components/dc/DcScreen';
import { HeroesScreen } from '../components/heroes/HeroesScreen';
import { LoginScreen } from '../components/login/LoginScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { DashboardsRoutes } from './DashboardsRoutes';


export const AppRouters = () => {
    return (
        <div>
<div>


</div>

<div>
                <Router>
                    <Routes>
                        <Route   path="/" element={ <DashboardsRoutes />} />
                        <Route exact path="/marvel"  element={ <MarvelScreen /> } />
                        <Route exact  path="/heroe/:heroeid"  element={ <HeroesScreen /> } />
                        <Route  exact path="/dc"  element={ <DcScreen /> } />
                        <Route  exact path="/login" element={ <LoginScreen />} />
                        
                    </Routes>

            </Router>
</div>


        </div>

    )
}
