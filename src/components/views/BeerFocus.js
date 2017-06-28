import React from 'react';
import { NavLink } from 'react-router-dom';
export default function(props) {
    return (
        <div className="focus">

            <div className="row details card hoverable">

                <div className="card-content">


                    <div className="col s12 m12 l12">
                        <div className="col s12 m4 l4 beerContainer">
                            <p className="beerHolder valign-wrapper">
                                <img className="beer" src={props.image_url} alt={props.name} />
                            </p>
                        </div>

                        <div className="col s12 m8 l8">

                            <h2 className="card-title no-padding no-margin"><NavLink className="foodLinks" to={"/beer/" + props.id}>{props.name}</NavLink></h2>
                            <p className="tagLine"><em>{props.tagline}</em></p>

                            <div className="col s12 pushDown"></div>

                            <p className="text">{props.description}</p>

                            <div className="col s12 pushDown"></div>

                            <p><strong>Tips:</strong></p> <p className="text">{props.brewers_tips}</p>

                            <div className="col s12 pushDown"></div>

                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
}