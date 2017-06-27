import React from 'react';
export default function(props) {
    return (
        <div className="book">

            <div className="row details card hoverable">

                <div className="card-content">


                    <div className="col s12 m12 l12">
                        <div className="col s12 m4 l4 beerContainer">
                            <p className="beerHolder valign-wrapper">
                                <img className="beer" src={props.image_url} alt={props.name} />
                            </p>
                        </div>

                        <div className="col s12 m8 l8">

                            <h2 className="card-title no-padding no-margin">{props.name}</h2>
                            <p><em>{props.tagline}</em></p>

                            <div className="col s12 pushDown"></div>

                            <p className="text">{props.description}</p>

                            <div className="col s12 pushDown"></div>

                            <p><strong>Tips:</strong></p> <p className="text">{props.brewers_tips}</p>

                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
}