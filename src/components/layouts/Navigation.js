import React from 'react';
import {
    NavLink
} from 'react-router-dom'
import Headroom from 'react-headroom';
import Back2Top from 'react-back2top';
import {Navbar, NavItem, Icon} from 'react-materialize';
export default function(props) {
    return (
        <div className="App">
            <Headroom>
                <Navbar brand='Berr.IO' right>
                    <li><NavLink to="/beer-of-the-day">Beer of The Day</NavLink></li>
                </Navbar>
            </Headroom>

            <div className="">
                {props.children}
            </div>

            <Back2Top>
                <div className="scrollTop"><Icon>insert_chart</Icon></div>
            </Back2Top>

            <footer className="page-footer black">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">UFC Champions</h5>
                            <p className="grey-text text-lighten-4">A Mini Viewer of the GitHub Application for source code, organizations, repositories, and users.</p>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <h5 className="white-text">About The Developer</h5>
                            <ul>
                                <li><a className="grey-text text-lighten-3" href="//github.com/planlodge" target="_blank">GitHub</a></li>
                                <li><a className="grey-text text-lighten-3" href="//www.linkedin.com/in/jarrodsampson/" target="_blank">LinkedIn</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright red">
                    <div className="container">
                        © 2017 Planlodge
                        <a className="grey-text text-lighten-4 right" href="//planlodge.com" target="_blank">Portfolio</a>
                    </div>
                </div>

            </footer>

        </div>

    );
}