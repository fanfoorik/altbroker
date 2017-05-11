import React from "react";
import { host_url } from "path.js";
import { Link } from "react-router";
import DropTip from "components/DropTip/DropTip";

export default props => {

	let { usertop } = props;
	let { triggerUser } = props;
	let { logoutUser } = props;

	return(

		<div className="usertop">
			<div className={usertop.active ? "usertop__trigger active" : "usertop__trigger"} onClick={triggerUser}>
				<div className="usertop__trigger-pic" style={{backgroundImage: "url("+host_url+usertop.data.userpic+")"}}></div>
			</div>

			{
				usertop.active &&

				<DropTip handleOuterClick={triggerUser} className="usertop__droptip">

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
									<svg className="usertop-score__icon" width="20" height="21" viewBox="0 0 20 21">
										<use xlinkHref="#icon_score" />
									</svg>
								</div>

								<div className="usertop-score usertop-score_money">
									<span className="usertop-score__num">213</span>
									<svg className="usertop-score__icon" width="14" height="21" viewBox="0 0 14 21">
										<use xlinkHref="#icon_lightning" fill="#4DA1FF" />
									</svg>
								</div>
							</div>
						</div>
					</div>

					<div className="droptip__content usertop__content fz_16">
						<span className="usertop__link">Редактировать профиль</span>
						<span className="usertop__link">Мне нужна помощь</span>
						<span className="usertop__link" onClick={logoutUser}>Выйти</span>
					</div>

				</DropTip>
			}
		</div>
	);
};