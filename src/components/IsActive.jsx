import React from "react";
import PropTypes from "prop-types";

const IsActive = ({component, active, ...props}) => {

	if(component && active){
		const Component = component;
		console.log(1);
		return <Component {...props} />
	}

	if(active){
		console.log(2);
		return props.children
	}

	return false;
};

IsActive.propTypes = {
	active: PropTypes.bool.isRequired
}

export default IsActive;
