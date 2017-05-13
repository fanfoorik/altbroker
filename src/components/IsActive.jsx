import React from "react";
import PropTypes from "prop-types";

const IsActive = ({component, active, ...props}) => {

	const Component = component;

	if(active){
		return <Component {...props} />
	}

	return false;
};

IsActive.propTypes = {
	active: PropTypes.bool.isRequired
}

export default IsActive;
