import React from 'react';
import { connect } from 'react-redux';

//components
import AuthPanel from '../components/AuthPanel';
import AuthButton from '../components/AuthButton';
import AuthError from '../components/AuthError';

//actions
import recoverPassword from './actions/recoverPasswordAction';
import recoverPasswordConfirm from './actions/recoverPasswordConfirmAction';
import recoverPasswordSubmit from './actions/recoverPasswordSubmitAction';


const RecoverPassword = props => {

	let { password } = props.recoverPassword;
	let { confirm } = props.recoverPassword;
	let { form } = props.recoverPassword;

	return(

		<AuthPanel className="auth-pane__extended">
			
			<form onSubmit={(event) => {
				event.preventDefault(event);
			 	props.dispatchPasswordSubmit();
			}}>

				<div className="auth-pane__subtitle mb_24">Изменение пароля</div>

				<div className="recover-pass-errors">

					<AuthError error={form.error} message={form.message} />

					<AuthError error={form.touch && (!password.valid || !confirm.valid)} message="Необходимо корректно заполнить поля. Следуйте подсказкам!" />
					
				</div>
				
				<div className="recover-pass clear">

					<div className="recover-pass__fields">
						
						<div className="auth-pane__row mb_24">
							<span className="auth-pane__label">Придумайте пароль</span>
							
							<label className="input-pane">
								<input 
									onChange={(event) => props.dispatchPassword(event.target.value, confirm.value) }
									value={password.value}
									className={ form.touch && !password.valid ? "input error" : "input"}
									type="password" />
							</label>

						</div>

						<div className="auth-pane__row mb_36">

							<span className="auth-pane__label">Повторите, чтобы не ошибиться</span>

							<label className="input-pane">
								<input 
									onChange={(event) => props.dispatchConfirm(event.target.value, password.value)}
									value={confirm.value}
									className={ confirm.touch && !confirm.valid ? "input error" : "input"}
									type="password" />
							</label>

						</div>

						<div className="mb_24">

							<AuthButton loading={form.loading} type="submit" className="button ext">Сменить пароль</AuthButton>

						</div>

						<div className="align_center">
							<span onClick={props.dispatchToLogin} className="auth-pane__footlink">Вспомнил пароль, войти</span>
						</div>

					</div>

					<div className="recover-pass__labels">

						<div className="pass-labels">
							<div className={"pass-labels__label "+password.minLength}>Минимум 5 символов</div>
							<div className={"pass-labels__label "+password.lowerCase}>Один строчный символ</div>
							<div className={"pass-labels__label "+password.upperCase}>Один заглавный символ</div>
							<div className={"pass-labels__label "+password.digit}>Одну цифру</div>
						</div>

						<AuthError className="fz_14" error={confirm.touch && !confirm.valid} message="Пароли не совпадают" />

					</div>

				</div>

			</form>

		</AuthPanel>
	)
}

const mapStateToProps = (state) => {
	return {
		recoverPassword: state.auth.recoverPassword
	}
};

const mapDispatchToProps = (dispatch) => {
	return {

		dispatchPassword(value, confirm){
			dispatch( recoverPassword(value, confirm) );
		},

		dispatchConfirm(value, password){
			dispatch( recoverPasswordConfirm(value, password) );
		},

		dispatchPasswordSubmit(){
			dispatch( recoverPasswordSubmit() );
		},

		dispatchToLogin(){
			dispatch({type: "LOGIN_PANEL"});
		}
	}
};

export default connect( mapStateToProps, mapDispatchToProps)(RecoverPassword);

