
import axios from "axios";

export default axios.create({
	baseURL: "http://alterainvest.ru/",
	headers:{
		"login": "vh.mrk@alterainvest.ru",
		"token": "707e180ee0d2048098fe6be7a084e054"
	}
});

