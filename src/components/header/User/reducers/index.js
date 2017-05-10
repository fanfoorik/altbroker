const initialState = {
	"active":false,
	"data":{
		"id": "",
		"name": "",
		"lastName": "",
		"shortName": "",
		"position": "",
		"city": "",
		"image": "",
		"userpic": ""
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