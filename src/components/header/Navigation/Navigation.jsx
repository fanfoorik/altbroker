import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router';

import Icon from "components/Icon";


const Navigation = props => {

    let { nav } = props;
 
	return(
		<nav className="nav">
			{
				nav.map((link, ind) => {
					return (
						<div className="nav__section" key={ind} id={"id_"+link.ID}>
							<Link activeClassName="nav__link_active" onClick={e => e.preventDefault()} data-enabled={link.ENABLED}  className={"nav__link nav__link-enabled-"+link.ENABLED} to={link.URL} >{link.NAME}</Link>
							<div className="nav__subnav subnav">
								{
									link.subnav.map((subLink, subInd) => {
										return (
											<Link className={"subnav__link subnav__link-enabled-"+subLink.ENABLED} to={subLink.URL} key={subInd}>
												
												<span className="subnav__icon">
													<Icon icon={subLink.ICO_CODE} width="22" height="19" />
												</span>
                                                
												{subLink.NAME}
											</Link>
										)
									})
								}
							</div>
						</div>
					)
				})
			}
		</nav>
	);
}

const mapStateToProps = state => {
    return{
        nav: state.header.nav
    }
}

export default connect(mapStateToProps)(Navigation);
