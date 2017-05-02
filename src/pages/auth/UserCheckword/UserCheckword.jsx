import React from "react";
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

					<div className="align_center">
						<div className="mb_36">
							<svg fill="#D0011B" width="80px" height="80px" viewBox="0 0 80 80" version="1.1">
						        <g id="Recover_error" transform="translate(-691.000000, -336.000000)">
						            <g id="Group" transform="translate(691.000000, 336.000000)">
						                <path d="M40,0 C45.5208609,0 50.7161215,1.04165625 55.5859375,3.125 C60.4557535,5.20834375 64.7005027,8.05987773 68.3203125,11.6796875 C71.9401223,15.2994973 74.7916563,19.5442465 76.875,24.4140625 C78.9583437,29.2838785 80,34.4791391 80,40 C80,45.5208609 78.9583437,50.7161215 76.875,55.5859375 C74.7916563,60.4557535 71.9401223,64.7005027 68.3203125,68.3203125 C64.7005027,71.9401223 60.4557535,74.7916563 55.5859375,76.875 C50.7161215,78.9583437 45.5208609,80 40,80 C34.4791391,80 29.2838785,78.9583437 24.4140625,76.875 C19.5442465,74.7916563 15.2994973,71.9401223 11.6796875,68.3203125 C8.05987773,64.7005027 5.20834375,60.4557535 3.125,55.5859375 C1.04165625,50.7161215 0,45.5208609 0,40 C0,34.4791391 1.04165625,29.2838785 3.125,24.4140625 C5.20834375,19.5442465 8.05987773,15.2994973 11.6796875,11.6796875 C15.2994973,8.05987773 19.5442465,5.20834375 24.4140625,3.125 C29.2838785,1.04165625 34.4791391,0 40,0 Z M40,75.078125 C44.8437742,75.078125 49.3879996,74.1536551 53.6328125,72.3046875 C57.8776254,70.4557199 61.5755051,67.9427242 64.7265625,64.765625 C67.8776199,61.5885258 70.3775949,57.8776254 72.2265625,53.6328125 C74.0755301,49.3879996 75,44.8437742 75,40 C75,35.1562258 74.0755301,30.6120004 72.2265625,26.3671875 C70.3775949,22.1223746 67.8776199,18.4244949 64.7265625,15.2734375 C61.5755051,12.1223801 57.8776254,9.62240508 53.6328125,7.7734375 C49.3879996,5.92446992 44.8437742,5 40,5 C35.1562258,5 30.6120004,5.92446992 26.3671875,7.7734375 C22.1223746,9.62240508 18.4244949,12.1223801 15.2734375,15.2734375 C12.1223801,18.4244949 9.62240508,22.1223746 7.7734375,26.3671875 C5.92446992,30.6120004 5,35.1562258 5,40 C5,44.8437742 5.92446992,49.3879996 7.7734375,53.6328125 C9.62240508,57.8776254 12.1223801,61.5885258 15.2734375,64.765625 C18.4244949,67.9427242 22.1223746,70.4557199 26.3671875,72.3046875 C30.6120004,74.1536551 35.1562258,75.078125 40,75.078125 Z"></path>
						                <path d="M40.5,40.5 L26.5673554,26.5673554 L40.5,40.5 L54,27 L40.5,40.5 Z M40.5,40.5 L27,54 L40.5,40.5 L53.456864,53.456864 L40.5,40.5 Z" stroke="#D0011B"></path>
						            </g>
						        </g>
							</svg>
						</div>

						<div className="auth-pane__text mb_24 color_red">Ссылка недействительна.</div>

						<div className="auth-pane__text mb_24">
							Либо вы уже её использовали, либо её кто то сломал.
						</div>

						<div className="align_center">
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
		user: state.recoverPassword.user
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

