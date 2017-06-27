import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';

// Using "Stateless Functional Components"
export default function(props) {
    return (
        <OwlCarousel slideSpeed={300} items={6} itemsTablet={[1200,4]} itemsMobile={[700,2]} stopOnHover={true} lazyLoad={true} autoPlay={true} singleItem={false}>
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