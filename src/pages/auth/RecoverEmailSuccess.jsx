import React from "react";
import { connect } from 'react-redux';

//components
import AuthPanel from './components/AuthPanel';

const RecoverEmailSuccess = ({message, ...props}) => {

	return(

		<AuthPanel>

			<div className="align_center mb_36">
				<svg width="80px" height="80px" viewBox="0 0 80 80" version="1.1">
			        <g transform="translate(-680.000000, -338.000000)" >
			            <g transform="translate(498.000000, 216.000000)">
			                <path fill="#4DA1FF" d="M222,122 C227.520861,122 232.716121,123.041656 237.585938,125.125 C242.455754,127.208344 246.700503,130.059878 250.320312,133.679688 C253.940122,137.299497 256.791656,141.544246 258.875,146.414062 C260.958344,151.283879 262,156.479139 262,162 C262,167.520861 260.958344,172.716121 258.875,177.585938 C256.791656,182.455754 253.940122,186.700503 250.320312,190.320312 C246.700503,193.940122 242.455754,196.791656 237.585938,198.875 C232.716121,200.958344 227.520861,202 222,202 C216.479139,202 211.283879,200.958344 206.414062,198.875 C201.544246,196.791656 197.299497,193.940122 193.679688,190.320312 C190.059878,186.700503 187.208344,182.455754 185.125,177.585938 C183.041656,172.716121 182,167.520861 182,162 C182,156.479139 183.041656,151.283879 185.125,146.414062 C187.208344,141.544246 190.059878,137.299497 193.679688,133.679688 C197.299497,130.059878 201.544246,127.208344 206.414062,125.125 C211.283879,123.041656 216.479139,122 222,122 Z M222,197.078125 C226.843774,197.078125 231.388,196.153655 235.632812,194.304688 C239.877625,192.45572 243.575505,189.942724 246.726562,186.765625 C249.87762,183.588526 252.377595,179.877625 254.226562,175.632812 C256.07553,171.388 257,166.843774 257,162 C257,157.156226 256.07553,152.612 254.226562,148.367188 C252.377595,144.122375 249.87762,140.424495 246.726562,137.273438 C243.575505,134.12238 239.877625,131.622405 235.632812,129.773438 C231.388,127.92447 226.843774,127 222,127 C217.156226,127 212.612,127.92447 208.367188,129.773438 C204.122375,131.622405 200.424495,134.12238 197.273438,137.273438 C194.12238,140.424495 191.622405,144.122375 189.773438,148.367188 C187.92447,152.612 187,157.156226 187,162 C187,166.843774 187.92447,171.388 189.773438,175.632812 C191.622405,179.877625 194.12238,183.588526 197.273438,186.765625 C200.424495,189.942724 204.122375,192.45572 208.367188,194.304688 C212.612,196.153655 217.156226,197.078125 222,197.078125 Z M237.9375,147.390625 C238.458336,146.869789 239.057288,146.609375 239.734375,146.609375 C240.411462,146.609375 241.010414,146.869789 241.53125,147.390625 C242.000002,147.859377 242.234375,148.445309 242.234375,149.148438 C242.234375,149.851566 242.000002,150.437498 241.53125,150.90625 L216.609375,175.984375 L216.296875,176.296875 C215.828123,176.817711 215.242191,177.078125 214.539062,177.078125 C213.835934,177.078125 213.250002,176.817711 212.78125,176.296875 L200.359375,163.953125 C199.890623,163.484373 199.65625,162.898441 199.65625,162.195312 C199.65625,161.492184 199.890623,160.906252 200.359375,160.4375 C200.880211,159.916664 201.479163,159.65625 202.15625,159.65625 C202.833337,159.65625 203.432289,159.916664 203.953125,160.4375 L214.5,170.984375 L237.9375,147.390625 Z" id="check---simple-line-icons"></path>
			            </g>
			        </g>
				</svg>
			</div>

			<div className="auth-pane__text">
				{ message }
			</div>

		</AuthPanel>
	)
}

const mapStateToProps = (state) => {
	return {
		message: state.auth.recoverEmail.form.successMessage
	}
};

export default connect( mapStateToProps )(RecoverEmailSuccess);

