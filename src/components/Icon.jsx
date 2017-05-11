import React from "react";

export default props => {
	return(
		<svg {...props}>
			<use  xlinkHref={"#"+props.icon} />
		</svg>
	)
}