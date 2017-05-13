import React from "react";
import PropTypes from "prop-types";

const IsActive = ({component, active, ...props}) => {

	if(component && active){
		const Component = component;
		return <Component {...props} />
	}

	if(active){
		return props.children
	}

	return false;
};

IsActive.propTypes = {
	active: PropTypes.bool.isRequired
}

export default IsActive;
