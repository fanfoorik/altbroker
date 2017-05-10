
export default function(state = [], action){

	switch(action.type){

		case "SET_NAVIGATION":
			return action.payload

		default:
			return state;
	}
}