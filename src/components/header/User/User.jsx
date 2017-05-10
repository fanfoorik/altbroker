import React from "react";
import { host_url } from "path.js";
import { Link } from "react-router";
import DropTip from "components/DropTip/DropTip";

export default props => {

	let { user } = props;
	let { triggerUser } = props;
	let { logoutUser } = props;

	return(

		<div className="user">
			<div className="user__trigger"
				style={{backgroundImage: "url("+host_url+user.data.userpic+")"}}
				onClick={()=> triggerUser()}
			></div>

			{
				user.active &&

				<DropTip className="user__droptip">

					<div className="droptip__header user__header clear">
						
						<div className="user__image">
							<img src={host_url+user.data.userpic} />
						</div>

						<div className="overflow_hidden">
							<div className="user__name">{user.data.name + " " + user.data.lastName}</div>
							<div className="user__position">{user.data.position}</div>
							<div className="user-scores">
								
								<div className="user-score user-score_score">
									<span className="user-score__num">35</span>
									<svg className="user-score__icon" width="20" height="21" viewBox="0 0 20 21">
										<use xlinkHref="#icon_score" />
									</svg>
								</div>

								<div className="user-score user-score_money">
									<span className="user-score__num">213</span>
									<svg className="user-score__icon" width="14" height="21" viewBox="0 0 14 21">
										<use xlinkHref="#icon_lightning" fill="#4DA1FF" />
									</svg>
								</div>
							</div>
						</div>
					</div>

					<div className="droptip__content user__content fz_16">
						<span className="user__link">Редактировать профиль</span>
						<span className="user__link">Мне нужна помощь</span>
						<span className="user__link" onClick={logoutUser}>Выйти</span>
					</div>

				</DropTip>
			}
		</div>
	);
};