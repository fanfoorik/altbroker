
import axios from "axios";
import {api_url} from "path.js";

export default axios.create({
	baseURL: "http://alterainvest.ru/api/v2/altbroker3/",
	headers:{
		"login": "vh.mrk@alterainvest.ru",
		"token": "e4ee719a07b0fc021e46b4ab27e87539",
		"Access-Control-Request-Method":"GET, POST"
	}
});