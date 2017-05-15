import React from "react";
import { connect } from "react-redux";
import { host_url } from "path.js";
import { index_url } from "path.js";
import { Link } from "react-router";
import DropTip from "components/DropTip/DropTip";
import IsActive from "components/IsActive";
import Icon from "components/Icon";

import { triggerUser } from './actions/userAction';
import { logoutUser } from './actions/logoutUserAction';

const Usertop = props => {

	let { usertop } = props;
	let { dispatchTriggerUsers } = props;
	let { dispatchLogoutUser } = props;

	return(

		<div className="usertop">
			<div className={usertop.active ? "usertop__trigger active" : "usertop__trigger"} onClick={dispatchTriggerUsers}>
				<div className="usertop__trigger-pic" style={{backgroundImage: "url("+host_url+usertop.data.userpic+")"}}></div>
			</div>

			<IsActive active={usertop.active}>
				<DropTip handleOuterClick={dispatchTriggerUsers} className="usertop__droptip">

					<div className="droptip__header usertop__header clear">
						
						<div className="usertop__image">
							<img src={host_url+usertop.data.userpic} />
						</div>

						<div className="overflow_hidden">
							<div className="usertop__name">{usertop.data.name + " " + usertop.data.lastName}</div>
							<div className="usertop__position">{usertop.data.position}</div>
							<div className="usertop-scores">
								
								<div className="usertop-score usertop-score_score">
									<span className="usertop-score__num">35</span>
									<Icon icon="score" className="usertop-score__icon" width="20" height="21" />
								</div>

								<div className="usertop-score usertop-score_money">
									<span className="usertop-score__num">213</span>
									<Icon icon="lightning" className="usertop-score__icon" width="14" height="21" />
								</div>
							</div>
						</div>
					</div>

					<div className="droptip__content usertop__content fz_16">
						<Link to={index_url+"user/"+usertop.data.id} onClick={dispatchTriggerUsers} className="usertop__link">Редактировать профиль</Link>
						<span className="usertop__link">Мне нужна помощь</span>
						<span className="usertop__link" onClick={()=>{
							dispatchTriggerUsers();
							dispatchLogoutUser();
						}}>Выйти</span>
					</div>

				</DropTip>
			</IsActive>

		</div>
	);
};

const mapStateToProps = state => {
    return{
        usertop: state.header.usertop
    }
}

const mapDispatchToProps = dispatch => {
    return{
        dispatchTriggerUsers(){
            dispatch(triggerUser());
        },
        dispatchLogoutUser(){
            dispatch(logoutUser());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Usertop);
