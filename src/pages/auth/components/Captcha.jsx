import React from "react";
import { connect } from 'react-redux';
import { host_url } from 'path.js';

import { setCaptchaValue, refreshCaptcha } from '../actions/captchaAction';

const Captcha = ({ className, ...props }) => {
	
	let {captcha} = props;

	return(
		<div className="auth-pane__row mb_36">
			<div className="captcha">
				
				<div className="clear">
					<div className="captcha__image mb_12">
						<img src={host_url+captcha.image} />
					</div>

					{
						<div className="captcha__refresh">
							<span className={captcha.loading ? "captcha-refresh loading" : "captcha-refresh"} onClick={() => props.dispatchRefreshCaptcha() }>
								<svg width="20" height="20" viewBox="0 0 20 20">
								    <path fill="#000" d="M9.707 17.809l.117.175c.04.052.062.108.069.166a.467.467 0 0 1-.01.166.357.357 0 0 1-.078.147.853.853 0 0 1-.137.127l-.195.098-2.91 1.503a.405.405 0 0 1-.313.03.457.457 0 0 1-.254-.205l-.059-.157a.4.4 0 0 1-.048-.332.386.386 0 0 1 .205-.254l1.582-.82h-.04c-.012 0-.025-.006-.038-.02a7.663 7.663 0 0 1-1.68-.624 9.101 9.101 0 0 1-1.504-.967 8.233 8.233 0 0 1-1.27-1.25 8.945 8.945 0 0 1-.996-1.514 8.789 8.789 0 0 1-.625-1.572 8.364 8.364 0 0 1-.302-1.64 8.951 8.951 0 0 1 .02-1.67c.058-.56.178-1.114.36-1.66.17-.548.394-1.065.674-1.554.28-.488.603-.947.967-1.377.365-.43.768-.82 1.211-1.171a8.246 8.246 0 0 1 1.445-.918.542.542 0 0 1 .45-.04.604.604 0 0 1 .097 1.114A7.724 7.724 0 0 0 4.17 5.387a7.097 7.097 0 0 0-1.416 2.52 7.244 7.244 0 0 0-.322 2.86c.084.97.348 1.892.79 2.764.248.456.535.882.86 1.28a7.35 7.35 0 0 0 2.373 1.904c.462.234.947.417 1.455.547l.147.039.146.039-1.152-1.797a.592.592 0 0 1-.088-.352c.006-.13.062-.22.166-.273l.156-.098a.456.456 0 0 1 .625.156l1.797 2.813v.02zm8.145-11.29c.26.508.468 1.032.625 1.573.156.54.257 1.087.302 1.64.046.554.04 1.11-.02 1.67a7.806 7.806 0 0 1-.36 1.66 8.46 8.46 0 0 1-1.611 2.94c-.359.423-.756.81-1.192 1.162a8.245 8.245 0 0 1-1.416.918.857.857 0 0 1-.147.059.58.58 0 0 1-.45-.068.582.582 0 0 1-.224-.245.593.593 0 0 1-.039-.469.604.604 0 0 1 .293-.351 7.362 7.362 0 0 0 3.633-4.317 7.297 7.297 0 0 0-.469-5.625 7.507 7.507 0 0 0-1.914-2.363 6.952 6.952 0 0 0-2.715-1.367 2.206 2.206 0 0 0-.37-.088 5.416 5.416 0 0 1-.372-.068l1.153 1.797a.543.543 0 0 1 .078.351c-.013.13-.072.221-.176.274l-.156.097a.4.4 0 0 1-.332.049.456.456 0 0 1-.274-.205L9.902 2.73h-.02l-.097-.195a.336.336 0 0 1-.068-.166.467.467 0 0 1 .01-.166c.013-.052.039-.1.078-.146a.853.853 0 0 1 .136-.127l.196-.098 2.91-1.504a.472.472 0 0 1 .342-.03c.123.033.218.102.283.206l.058.156a.335.335 0 0 1 .02.332.602.602 0 0 1-.234.274l-1.563.78a3.16 3.16 0 0 1 .508.118 8.836 8.836 0 0 1 1.68.635 8.03 8.03 0 0 1 1.484.957c.456.371.872.788 1.25 1.25.378.462.703.967.977 1.514z"/>
								</svg>
							</span>
						</div>
					}
					
				</div>

				<input onChange={(event) => props.dispatchCaptchaValue(event.target.value)} className={"input " + className} type="text" placeholder="Введите код с картинки" value={captcha.value} />
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		captcha: state.auth.login.captcha
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		dispatchCaptchaValue(value){
			dispatch( setCaptchaValue(value) );
		},
		dispatchRefreshCaptcha(){
			dispatch( refreshCaptcha() );
		}
	}
};

export default connect( mapStateToProps,  mapDispatchToProps)(Captcha);

