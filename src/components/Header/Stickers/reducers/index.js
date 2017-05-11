const initialState = {
	"active":false,
	"data":[],
	"error":{
		"on":false,
		"message":""
	}
};

export default function(state = initialState, action){

	switch(action.type){
		
		case "TRIGGER_STICKERS":
			return {
				...state,
				"active":!state.active,
			}

		default:
			return state;
	}
}