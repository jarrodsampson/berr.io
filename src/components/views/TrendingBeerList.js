import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';

// Using "Stateless Functional Components"
export default function(props) {
    return (
        <OwlCarousel
            items={6}
            autoplaySpeed={300}
            lazyLoad={true}
            rewind={true}
            responsive={
                {
                    "0":{items:1},
                    "600":{items:3},
                    "1000":{items:6}
                }
            }
            autoplay={true}
            autoplayHoverPause={true}>
            {props.beers.map((beer, i) => {
                return (
                    <div key={beer.id} className="item">
                        <div className="popular">
                            <div className="card hoverable">
                                <NavLink to={'/beer/' + beer.id}>
                                    <div className="card-div valign-wrapper">
                                        <img src={beer.image_url} alt="" />
                                    </div>
                                    <div className="card-content">
                                        <p>{beer.name}</p>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                );
            })}

        </OwlCarousel>
    );
}