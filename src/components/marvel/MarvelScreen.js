import React from 'react';
import { HeroeList } from '../heroes//HeroeList';

export const MarvelScreen = () => {
    return (
        <div>

            <div>
                <h1>MarvelScreen</h1>
            </div>

            <div>
                <HeroeList publisher={ 'Marvel Comics' }  />
            </div>

        </div>
    )
}
