import React from 'react';
import { connect } from 'react-redux';

//components
import AuthPanel from '../components/AuthPanel';

//actions
import userCheckwordAjax from './actions/userCheckwordAjaxAction';


class UserCheckword extends React.Component {

	componentDidMount(){
		this.props.dispatchUserCheckwordAjax();
	}

	render(){

		let { user } = this.props;

		if( user.loading ){

			return (
				<div className="color_red">processing...</div>
			)
		}

		return (
			<AuthPanel>
				{
					user.error &&

					<div className="align-center">
						<div className="mb_36">
							
							<svg width="80" height="80" viewBox="0 0 80 80">
							    <g fill="none" fillRule="evenodd">
							        <path fill="#D0011B" d="M40 0c5.52 0 10.716 1.042 15.586 3.125C60.456 5.208 64.7 8.06 68.32 11.68c3.62 3.62 6.472 7.864 8.555 12.734C78.958 29.284 80 34.48 80 40c0 5.52-1.042 10.716-3.125 15.586-2.083 4.87-4.935 9.115-8.555 12.734-3.62 3.62-7.864 6.472-12.734 8.555C50.716 78.958 45.52 80 40 80c-5.52 0-10.716-1.042-15.586-3.125-4.87-2.083-9.115-4.935-12.734-8.555-3.62-3.62-6.472-7.864-8.555-12.734C1.042 50.716 0 45.52 0 40c0-5.52 1.042-10.716 3.125-15.586C5.208 19.544 8.06 15.3 11.68 11.68c3.62-3.62 7.864-6.472 12.734-8.555C29.284 1.042 34.48 0 40 0zm0 75.078c4.844 0 9.388-.924 13.633-2.773 4.245-1.85 7.943-4.362 11.094-7.54 3.15-3.176 5.65-6.887 7.5-11.132C74.076 49.388 75 44.843 75 40c0-4.844-.924-9.388-2.773-13.633-1.85-4.245-4.35-7.943-7.5-11.094-3.151-3.15-6.85-5.65-11.094-7.5C49.388 5.924 44.843 5 40 5c-4.844 0-9.388.924-13.633 2.773-4.245 1.85-7.943 4.35-11.094 7.5-3.15 3.151-5.65 6.85-7.5 11.094C5.924 30.612 5 35.157 5 40c0 4.844.924 9.388 2.773 13.633 1.85 4.245 4.35 7.956 7.5 11.133 3.151 3.177 6.85 5.69 11.094 7.539 4.245 1.849 8.79 2.773 13.633 2.773z"/>
							        <path stroke="#D0011B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M40.5 40.5L26.567 26.567 40.5 40.5 54 27 40.5 40.5zm0 0L27 54l13.5-13.5 12.957 12.957L40.5 40.5z"/>
							    </g>
							</svg>

						</div>

						<div className="auth-pane__text mb-24 color_red">Ссылка недействительна.</div>

						<div className="auth-pane__text mb-24">
							Либо вы уже её использовали, либо её кто то сломал.
						</div>

						<div className="align-center">
							<span onClick={this.props.dispatchToRecoverEmail} className="auth-pane__footlink">Восстановить пароль ещё раз</span>
						</div>
					</div>
				}

			</AuthPanel>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.auth.recoverPassword.user
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		dispatchUserCheckwordAjax(){
			dispatch( userCheckwordAjax() );
		},
		dispatchToRecoverEmail(){
			dispatch({type: "RECOVER_EMAIL_PANEL"});
		}
	}
};

export default connect( mapStateToProps, mapDispatchToProps )(UserCheckword);

