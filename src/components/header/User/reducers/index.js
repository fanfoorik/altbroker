const initialState = {
	"active":false,
	"data":{
		"id": "1587",
		"name": "Владимир",
		"lastName": "Хафизов",
		"shortName": "Хафизов В.",
		"position": "HTML-верстальщик",
		"city": "Санкт-Петербург",
		"image": "/upload/main/fad/fadcbfd4452d97f06c16e39fb67b42ad.jpg",
		"userpic": "/upload/resize_cache/main/fad/86_86_2/fadcbfd4452d97f06c16e39fb67b42ad.jpg"
	},
	"error":{
		"on":false,
		"message":""
	}
};

export default function(state = initialState, action){

	switch(action.type){

		case "SET_USER":
			let { payload } = action;

			return {
				...state,
				"data":{
					"id": payload.ID,
					"name": payload.NAME,
					"lastName": payload.LAST_NAME,
					"shortName": payload.SHOT_NAME,
					"position": payload.WORK_POSITION,
					"city": payload.UF_CITY_TEXT,
					"image": payload.PERSONAL_PHOTO_TEXT,
					"userpic": payload.PERSONAL_PHOTO_TEXT_86x86
				}
			}

		case "TRIGGER_USER":
			return {
				...state,
				"active":!state.active,
			}

		default:
			return state;
	}
}