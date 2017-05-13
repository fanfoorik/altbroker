import React from "react";

export default props => {

	return(
		<svg {...props}>
			<use width={props.width} height={props.height} xlinkHref={"#icon_"+props.icon} />
		</svg>
	)
}