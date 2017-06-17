import React from 'react';
import { NavLink } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import {Button} from 'react-materialize';

// Using "Stateless Functional Components"
export default function(props) {
    return (
        <div className="book">
            <DocumentTitle title={props.name + " -  Ice and Fire The Series"} />
            <div>
                <Button onClick={props.goBack}>Back</Button>
            </div>
            <div className="details">
                <h2>{props.name}</h2>
                <p><em>{props.tagline}</em></p>
                <p>
                    <img width="100" src={props.image_url} alt="" />
                </p>
                <p>{props.description}</p>
                <p>{props.brewers_tips}</p>
                <p><em>{props.contributed_by}</em></p>
            </div>
        </div>
    );
}