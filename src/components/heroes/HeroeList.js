import React from 'react'
import { GetHeroesByPublisher } from '../../selectors/getHeroesByPublisher';

export const HeroeList = ({ publisher }) => {

    const heroes = GetHeroesByPublisher( publisher );


    return (
        <div>
            <ul>
                {
                    heroes.map( hero => (
                        <li key={ hero.id } >
                            { hero.superhero }
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
