import React from 'react';
import DocumentTitle from 'react-document-title';
import {Button, Collapsible, CollapsibleItem, Tabs, Tab, Collection, CollectionItem, Modal} from 'react-materialize';
// Using "Stateless Functional Components"
export default function(props) {
    return (
        <div className="book">
            <DocumentTitle title={props.name + " - Berr.IO"} />
            <div className="row">
                <Button className="red" onClick={props.goBack}>Back</Button>
            </div>

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
                            <p className="tagLine"><em>{props.tagline}</em></p>

                            <div className="col s12 pushDown"></div>

                            <p className="text">{props.description}</p>

                            <div className="col s12 pushDown"></div>

                            <p><strong>Tips:</strong></p> <p className="text">{props.brewers_tips}</p>

                        </div>
                    </div>

                    <div className="col s12 pushDownLarge"></div>

                    <Tabs className='tab-demo z-depth-1'>
                        <Tab title="Specs" active>

                            <div className="pushDown"></div>

                            <div className="row">
                                <div className="col s12">

                                    <table className="striped responsive-table highlight">
                                        <thead>
                                        <tr>
                                            <th data-field="id">Name</th>
                                            <th data-field="name">Value</th>
                                        </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td>Boil Volume</td>
                                                <td>{props.boil_volume.value} {props.boil_volume.unit}</td>
                                            </tr>
                                            <tr>
                                                <td>Volume</td>
                                                <td>{props.volume.value} {props.volume.unit}</td>
                                            </tr>
                                            <tr>
                                                <td>ABV (Alcohol By Volume)</td>
                                                <td>{props.abv}</td>
                                            </tr>
                                            <tr>
                                                <td>Attenuation</td>
                                                <td>{props.attenuation_level}</td>
                                            </tr>
                                            <tr>
                                                <td>EBC (European Brewing Convention)</td>
                                                <td>{props.ebc}</td>
                                            </tr>
                                            <tr>
                                                <td>IBU (International Bitterness Unit)</td>
                                                <td>{props.ibu}</td>
                                            </tr>
                                            <tr>
                                                <td>pH</td>
                                                <td>{props.ph}</td>
                                            </tr>
                                            <tr>
                                                <td>SRM (Standard Reference Method)</td>
                                                <td>{props.srm}</td>
                                            </tr>
                                            <tr>
                                                <td>Target Original Gravity</td>
                                                <td>{props.target_og}</td>
                                            </tr>
                                            <tr>
                                                <td>Target Final Gravity</td>
                                                <td>{props.target_fg}</td>
                                            </tr>
                                            <tr>
                                                <td>Method</td>
                                                <td>
                                                    <a className="foodLinks" href="#methodModal">
                                                        View
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </Tab>
                        <Tab title="Ingredients">
                            <div className="ingredients col s12 m12 l12">

                                <div className="pushDown"></div>

                                <Collapsible>
                                    <CollapsibleItem header='Hops' icon='info_outline'>


                                        <table className="striped responsive-table">
                                            <thead>
                                            <tr>
                                                <th data-field="id">Name</th>
                                                <th data-field="name">Taste</th>
                                                <th data-field="name">Amount</th>
                                                <th data-field="name">When to Add?</th>
                                            </tr>
                                            </thead>

                                            <tbody>
                                                {props.ingredients.hops.map(function(hops, i) {
                                                    return <tr key={i}>
                                                                <td>
                                                                    <a className="foodLinks" href={"https://ychhops.com/varieties/" + hops.name} target="_blank"  rel="noopener noreferrer">
                                                                        {hops.name}
                                                                    </a>
                                                                </td>
                                                                <td>{hops.attribute}</td>
                                                                <td>{hops.amount.value} {hops.amount.unit}</td>
                                                                <td>{hops.add}</td>
                                                            </tr>;
                                                })}
                                            </tbody>
                                        </table>

                                    </CollapsibleItem>
                                    <CollapsibleItem header='Malt' icon='view_day'>

                                        <table className="striped responsive-table">
                                            <thead>
                                            <tr>
                                                <th data-field="id">Name</th>
                                                <th data-field="name">Amount</th>
                                            </tr>
                                            </thead>

                                            <tbody>

                                                {props.ingredients.malt.map(function(malt, i) {
                                                    return <tr key={i}>
                                                                <td>
                                                                    <a className="foodLinks" href={"https://www.google.com/search?q=" + malt.name + " malts beer"} target="_blank"  rel="noopener noreferrer">
                                                                        {malt.name}
                                                                    </a>
                                                                </td>
                                                                <td>{malt.amount.value} {malt.amount.unit}</td>
                                                            </tr>;
                                                })}

                                            </tbody>
                                        </table>
                                    </CollapsibleItem>
                                    <CollapsibleItem header='Yeast' icon='whatshot'>
                                        <p>{props.ingredients.yeast}</p>
                                    </CollapsibleItem>
                                </Collapsible>

                            </div>
                        </Tab>
                        <Tab title="Complimenting Foods">

                            <div className="pushDown"></div>

                            <Collection>
                                {props.food_pairing.map(function(food, i) {
                                    return <p key={i}><CollectionItem><a className="foodLinks" rel="noopener noreferrer" href={"https://www.google.com/search?q=" + food + "&source=lnms&tbm=isch"} target="_blank">{food}</a></CollectionItem></p>;
                                })}
                            </Collection>
                        </Tab>
                    </Tabs>

                    <div>
                        <p><em>Contribution By: {props.contributed_by}</em></p>
                        <p><em>Brew Date: {props.first_brewed}</em></p>
                    </div>

                </div>
            </div>

            <div className="col s12 pushDown"></div>

            <Modal
                header={'Method: ' + (props.method.twist || "None")}
                id='methodModal'>
                <div>
                    <table className="striped responsive-table highlight">
                        <thead>
                            <tr>
                                <th data-field="id">Name</th>
                                <th data-field="name">Value</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Fermentation Temperature</td>
                                <td>{props.method.fermentation.temp.value} {props.method.fermentation.temp.unit}</td>
                            </tr>
                            {props.method.mash_temp.map(function(temp, i) {
                                return <tr key={i}>
                                        <td>Mash Temperature</td>
                                        <td>{temp.temp.value} {temp.temp.unit}</td>
                                       </tr>;
                            })}
                        </tbody>
                    </table>
                </div>
            </Modal>

        </div>
    );
}