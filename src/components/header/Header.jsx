import React from "react";
import { Link } from 'react-router';
import { index_url } from 'path.js';

import Navigation from './components/Navigation';

export default props => {
	return(
		<header className="header" id="header">

			<div className="center clear">

				<div  className="header__left">

					<Link className="logo" to={index_url}>АльтБрокер</Link>

					<div className="patch-notes">
						
						<span className="patch-notes__trigger"></span>

						<div className="patch-notes__droptip droptip">

							<div className="droptip__header clear">
								
								<div className="patch-notes__icon">
									<svg fill="#4da1ff" width="70" height="70" viewBox="0 0 70 70">
										<use xlinkHref="#icon_anchor" />
									</svg>
								</div>

								<div className="overflow_hidden">
									<div className="patch-notes__title">АльтБрокер</div>
									<div className="patch-notes__version">v3.1.5</div>
									<div className="patch-notes__name">СанФранциско</div>
								</div>
							</div>

							<div className="droptip__content fz_16">
								
								Своим опытом и знаниями с участниками будут делиться не только сотрудники Яндекса, которые делают приложения для миллионов пользователей, но и приглашенные специалисты. Мы не обойдемся только теорией. Будет много практики и командной работы над настоящими продуктами. Как всегда, обучение бесплатное, а всем иногородним студентам Яндекс оплатит проезд и проживание.

							</div>

							<div className="droptip__footer">
								
								<div className="patch-notes__controls">
								
									<svg fill="red" width="10" height="16" viewBox="0 0 10 16">
										<use xlinkHref="#icon_arrow-left" />
									</svg>

									<svg width="10" height="16" viewBox="0 0 10 16">
										<use xlinkHref="#icon_arrow-right" />
									</svg>

								</div>

							</div>

						</div>
					</div>

				</div>

				<div className="header__center">
					
					<Navigation className="nav" data={props.data} />
					
				</div>

				<div  className="header__right">
					
				</div>

			</div>

		</header>
	);
}