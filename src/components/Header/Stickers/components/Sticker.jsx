import React, { Component } from "react";

export default class StickersOverlay extends Component {
	render(){
		return(
			<div className="sticker">
				<div className="sticker__inner">
					<div className="sticker__header clear">
						<div className="sticker__time">2 дня назад</div>
						<div className="sticker__name">Антон Иванов</div>
					</div>
					<div className="sticker__content">
						Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.
					</div>
				</div>
			</div>
		)
	}
};