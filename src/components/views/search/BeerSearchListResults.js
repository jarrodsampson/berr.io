import React from 'react';
import { NavLink } from 'react-router-dom';
// Using "Stateless Functional Components"
export default function(props) {
    return (
        <div className="row">
            {props.beers.map((beer, i) => {
                return (
                    <div key={beer.id} className="col s12 m6 l4">
                        <div className="beerBox">
                            <div className="card hoverable">
                                <NavLink to={'/beer/' + beer.id}>
                                    <div className="card-image">
                                        <div className="card-div">
                                            <img src={beer.image_url} alt="" />
                                        </div>
                                        <NavLink to={'/beer/' + beer.id} className="btn-floating halfway-fab waves-effect waves-light red">
                                            <i className="material-icons">add</i>
                                        </NavLink>
                                    </div>
                                    <div className="card-content">
                                        <span className="card-title truncate">{beer.name}</span>
                                        <p>{beer.tagline}</p>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                );

            })}

        </div>
    );
}