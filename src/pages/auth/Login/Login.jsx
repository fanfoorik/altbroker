import React, { Component } from "react";
import { browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';

import { index_url } from 'path.js';

//actions
import loginEmail  from './actions/loginEmailAction';
import loginPassword  from './actions/loginPasswordAction';
import loginSubmit from './actions/loginSubmitAction';

//components
import AuthPanel from '../components/AuthPanel';
import AuthError from '../components/AuthError';
import AuthButton from '../components/AuthButton';
import LoginEmail from '../components/LoginEmail';
import LoginPassword from '../components/LoginPassword';
import Captcha from '../components/Captcha';

class Login extends Component {

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.dispatchLoginSubmit();
	}

	render(){

		let {login} = this.props;

		return(

			<AuthPanel>

				<div className="auth-pane__title">Вход</div>
				
				<form onSubmit={this.handleSubmit}>

					<div className="auth-pane__error">

						<AuthError error={login.form.error} message={login.form.message} />
						<AuthError error={login.form.touch && !login.email.valid} message={login.email.message} />
						<AuthError error={login.form.touch && !login.password.valid} message={login.password.message} />

					</div>

					<div className="auth-pane__row">

						<LoginEmail error={login.form.touch && !login.email.valid} value={login.email.value} changeHandler={(event) => { this.props.dispatchLoginEmail(event.target.value) } } />

					</div>

					<div className="auth-pane__row mb_36">

						<LoginPassword error={login.form.touch && !login.password.valid} value={login.password.value} changeHandler={(event) => { this.props.dispatchLoginPassword(event.target.value) } } />

					</div>
					
					{login.captcha.active && <Captcha />}

					<div className="mb_12">

						<AuthButton loading={login.form.loading} type="submit" className="button ext">Войти</AuthButton>

					</div>

					<div className="align_center">
						<span onClick={this.props.dispatchToRecoverEmail} className="auth-pane__footlink">Я забыл пароль</span>
					</div>

				</form>

			</AuthPanel>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		login: state.login
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		dispatchLoginSubmit(){
			dispatch( loginSubmit() );
		},

		dispatchLoginEmail(value){
			dispatch( loginEmail(value) );
		},

		dispatchLoginPassword(value){
			dispatch( loginPassword(value) );
		},

		dispatchToRecoverEmail(){
			dispatch({type: "RECOVER_EMAIL_PANEL"});
		}
	}
};

export default connect( mapStateToProps,  mapDispatchToProps)(Login);