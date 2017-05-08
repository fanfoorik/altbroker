import React, { Component } from "react";
import { connect } from "react-redux";
import { index_url } from "path.js"

export default (ComposedComponent) => {

	class Authentication extends Component {
	    
	    static contextTypes = {
	      router: React.PropTypes.object
	    }

	    componentWillMount(){
	    	if(!this.props.redirect.redirect){
		    	console.log("redirect -", this.props.redirect);
		    	console.log("ComposedComponent -", ComposedComponent);

		    	this.context.router.replace({
		    		pathname: index_url+'login/',
		    		state: {
		    			location: this.props.location
		    		}
		    	});
	    	}
	    }

	    componentWillUpdate(nextProps) {
	    	if(!this.props.redirect.redirect){
		    	console.log("redirect -", nextProps.redirect);
		    	console.log("ComposedComponent -", ComposedComponent);

		    	this.context.router.replace({
		    		pathname: index_url+'login/',
		    		state: {
		    			location: nextProps.location
		    		}
		    	});
	    	}
	    }

	    render() {
	      return <ComposedComponent {...this.props} />
	    }
  	}

  	const mapStateToProps = state => {
	    return { redirect: state.auth.redirect };
	}

  	return connect(mapStateToProps)(Authentication);
};