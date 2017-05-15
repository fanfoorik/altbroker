import React from 'react';

export default ({className, message, error, ...props}) => {

	let classAttr = ["auth-pane-error"];
	if(className) classAttr.push(className);

	if(error && message.length){
		return <div className={classAttr.join(" ").trim()}>{message}</div>
	}

	return false;
}