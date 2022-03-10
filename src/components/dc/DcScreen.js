import React from 'react';
import { HeroeList } from '../heroes//HeroeList';
export const DcScreen = () => {
    return (
        <div>
            <div>
                <h1>DC Screen</h1>
            </div>
            <div>
                <HeroeList publisher={ 'DC Comics' }  />
            </div>
        </div>

    )
}
