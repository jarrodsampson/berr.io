import React from 'react';
import { NavLink } from 'react-router-dom';
// Using "Stateless Functional Components"
export default function(props) {
    return (
        <div className="data-list">

            {props.beers.map((beer, i) => {
            console.log(beer.id);
                return (

                    <div key={beer.id} className="col-sm-6 col-md-4">
                        <div className="beerBox">
                            <h4 className="">{beer.name}</h4>
                            <p>{beer.tagline}</p>
                            <NavLink to={'/beer/' + (i + 1)}>Details</NavLink>
                        </div>


                    </div>
                );

            })}

        </div>
    );
}