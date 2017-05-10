import React, { Component } from "react";
import { connect } from "react-redux";
import { index_url } from "path.js"

export default (ComposedComponent) => {

	class Authentication extends Component {
	    
	    static contextTypes = {
	      router: React.PropTypes.object
	    }

	    componentWillMount(){
	    	if(!this.props.authenticated){
		    	// console.log("ComposedComponent -", ComposedComponent);

		    	this.context.router.replace({
		    		pathname: index_url+'login/',
		    		state: {
		    			location: this.props.location
		    		}
		    	});
	    	}
	    }

	    componentWillUpdate(nextProps) {
	    	if(!nextProps.authenticated){
		    	// console.log("ComposedComponent2 -", ComposedComponent);

		    	this.context.router.replace({
		    		pathname: index_url+'login/',
		    		state: {
		    			location: nextProps.location
		    		}
		    	});
	    	}
	    }

	    render() {

	    	// console.log( this.props.location );

	      return <ComposedComponent {...this.props} />
	    }
  	}

  	const mapStateToProps = state => {
	    return { authenticated: state.auth.components.authenticated };
	}

  	return connect(mapStateToProps)(Authentication);
};