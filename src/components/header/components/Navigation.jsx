import React, { Component } from "react";
import { Link } from 'react-router';
import { index_url } from 'path.js';

let data = {
	"MENU": {
      "884778": {
        "ID": "884778",
        "NAME": "Брокеру",
        "URL": "/altbroker3/broker/",
        "ICO": "",
        "ENABLED": "N",
        "CHILDREN": {
          "884807": {
            "ID": "884807",
            "NAME": "Бизнесы",
            "URL": "/altbroker3/broker/gb/",
            "ICO": "",
            "ENABLED": "Y"
          },
          "884813": {
            "ID": "884813",
            "NAME": "Франшизы",
            "URL": "/altbroker3/broker/fr/",
            "ICO": "",
            "ENABLED": "Y"
          },
          "884814": {
            "ID": "884814",
            "NAME": "Подборки",
            "URL": "/altbroker3/broker/collection/",
            "ICO": "",
            "ENABLED": "Y"
          },
          "885029": {
            "ID": "885029",
            "NAME": "Продавцы",
            "URL": "/altbroker3/broker/sellers/",
            "ICO": "",
            "ENABLED": "Y"
          },
          "885153": {
            "ID": "885153",
            "NAME": "Покупатели",
            "URL": "/altbroker3/broker/shoppers/",
            "ICO": "",
            "ENABLED": "Y"
          },
          "885215": {
            "ID": "885215",
            "NAME": "Публикация в блог",
            "URL": "/altbroker3/broker/pub/",
            "ICO": "",
            "ENABLED": "Y"
          }
        }
      },
      "884779": {
        "ID": "884779",
        "NAME": "Сделки",
        "URL": "/altbroker3/deal/",
        "ICO": "",
        "ENABLED": "Y",
        "CHILDREN": {
          "885230": {
            "ID": "885230",
            "NAME": "Анкеты",
            "URL": "/altbroker3/deal/anketa/",
            "ICO": "",
            "ENABLED": "Y"
          },
          "885232": {
            "ID": "885232",
            "NAME": "Паспорта",
            "URL": "/altbroker3/deal/passport/",
            "ICO": "",
            "ENABLED": "Y"
          },
          "885237": {
            "ID": "885237",
            "NAME": "Договоры",
            "URL": "/altbroker3/deal/pact/",
            "ICO": "",
            "ENABLED": "Y"
          },
          "885239": {
            "ID": "885239",
            "NAME": "Акты",
            "URL": "/altbroker3/deal/act/",
            "ICO": "",
            "ENABLED": "Y"
          },
          "885243": {
            "ID": "885243",
            "NAME": "Моя зп",
            "URL": "/altbroker3/deal/zp/",
            "ICO": "",
            "ENABLED": "Y"
          },
          "885245": {
            "ID": "885245",
            "NAME": "Управление зп",
            "URL": "/altbroker3/deal/controlzp/",
            "ICO": "",
            "ENABLED": "Y"
          },
          "885256": {
            "ID": "885256",
            "NAME": "Шаблоны",
            "URL": "/altbroker3/deal/template/",
            "ICO": "",
            "ENABLED": "Y"
          }
        }
      },
      "884792": {
        "ID": "884792",
        "NAME": "Мой прогресс",
        "URL": "/altbroker3/evolution/",
        "ICO": "",
        "ENABLED": "Y",
        "CHILDREN": {
          "885260": {
            "ID": "885260",
            "NAME": "Курсы",
            "URL": "/altbroker3/evolution/course/",
            "ICO": "",
            "ENABLED": "Y"
          },
          "885710": {
            "ID": "885710",
            "NAME": "Тесты",
            "URL": "/altbroker3/evolution/test/",
            "ICO": "",
            "ENABLED": "Y"
          },
          "885716": {
            "ID": "885716",
            "NAME": "Достижения",
            "URL": "/altbroker3/evolution/progress/",
            "ICO": "",
            "ENABLED": "Y"
          },
          "885720": {
            "ID": "885720",
            "NAME": "Кафедра",
            "URL": "/altbroker3/evolution/lectern/",
            "ICO": "",
            "ENABLED": "Y"
          },
          "885722": {
            "ID": "885722",
            "NAME": "История",
            "URL": "/altbroker3/evolution/history/",
            "ICO": "",
            "ENABLED": "Y"
          },
          "885734": {
            "ID": "885734",
            "NAME": "Рейтинг",
            "URL": "/altbroker3/evolution/rating/",
            "ICO": "",
            "ENABLED": "Y"
          },
          "885771": {
            "ID": "885771",
            "NAME": "Мой отдел продаж",
            "URL": "/altbroker3/evolution/mysalesteam/",
            "ICO": "",
            "ENABLED": "Y"
          },
          "885775": {
            "ID": "885775",
            "NAME": "Магазин бонусов",
            "URL": "/altbroker3/evolution/storebonus/",
            "ICO": "",
            "ENABLED": "Y"
          }
        }
      },
      "884794": {
        "ID": "884794",
        "NAME": "Статистика",
        "URL": "/altbroker3/stat/",
        "ICO": "",
        "ENABLED": "Y",
        "CHILDREN": {
          "885782": {
            "ID": "885782",
            "NAME": "Отчеты",
            "URL": "/altbroker3/stat/reports/",
            "ICO": "",
            "ENABLED": "Y"
          },
          "885786": {
            "ID": "885786",
            "NAME": "Аналитика",
            "URL": "/altbroker3/stat/analytics/",
            "ICO": "",
            "ENABLED": "Y"
          },
          "885791": {
            "ID": "885791",
            "NAME": "Нормативы",
            "URL": "/altbroker3/stat/norms/",
            "ICO": "",
            "ENABLED": "Y"
          }
        }
      },
      "884799": {
        "ID": "884799",
        "NAME": "Административный",
        "URL": "/altbroker3/admin/",
        "ICO": "",
        "ENABLED": "Y",
        "CHILDREN": {
          "885858": {
            "ID": "885858",
            "NAME": "Модерация",
            "URL": "/altbroker3/admin/mode/",
            "ICO": "",
            "ENABLED": "Y"
          },
          "885864": {
            "ID": "885864",
            "NAME": "Кандидаты",
            "URL": "/altbroker3/admin/candidate/",
            "ICO": "",
            "ENABLED": "Y"
          },
          "885869": {
            "ID": "885869",
            "NAME": "Команда",
            "URL": "/altbroker3/admin/team/",
            "ICO": "",
            "ENABLED": "Y"
          },
          "885933": {
            "ID": "885933",
            "NAME": "Полиграф",
            "URL": "/altbroker3/admin/polygraph/",
            "ICO": "",
            "ENABLED": "Y"
          },
          "885939": {
            "ID": "885939",
            "NAME": "Кандидат",
            "URL": "/altbroker3/admin/candidate/",
            "ICO": "",
            "ENABLED": "Y"
          },
          "885942": {
            "ID": "885942",
            "NAME": "Уведомления",
            "URL": "/altbroker3/admin/notif/",
            "ICO": "",
            "ENABLED": "Y"
          },
          "885945": {
            "ID": "885945",
            "NAME": "Настройки",
            "URL": "/altbroker3/admin/settings/",
            "ICO": "",
            "ENABLED": "Y"
          }
        }
      }
    }
}

let origNav = data.MENU;
let nav = [];

for(let el in origNav){
	let origSubnav = origNav[el].CHILDREN;
	origNav[el].subnav = [];
	for(let childEl in origSubnav ){
		origNav[el].subnav.push( origSubnav[childEl] )
	}
	delete origNav[el].CHILDREN;
	nav.push(origNav[el]);
}

class Navigation extends Component {


    // shouldComponentUpdate(nextProps, nextState){

        
    // }

    render(){
    	return(
    		<nav className="nav">
    			{
    				nav.map((link, ind) => {
    					return (
    						<div className="nav__section" key={ind} id={"id_"+link.ID}>
    							<Link activeClassName="nav__link_active" onClick={e => e.preventDefault()} data-enabled={link.ENABLED}  className={"nav__link nav__link-enabled-"+link.ENABLED} to={link.URL} >{link.NAME}</Link>
    							<div className="nav__subnav subnav">
    								{
    									link.subnav.map((subLink, subInd) => {
    										return (
    											<Link className={"subnav__link subnav__link-enabled-"+subLink.ENABLED} to={subLink.URL} key={subInd}>
    												
    												<span className="subnav__icon">
                                                        <svg width="22" height="19">
                                                            <use xlinkHref={"#"+subLink.ICO_CODE} width="22" height="19" />
                                                        </svg>
    												</span>
                                                    
    												{subLink.NAME}
    											</Link>
    										)
    									})
    								}
    							</div>
    						</div>
    					)
    				})
    			}
    		</nav>
    	);
    }
}

Navigation.defaultProps = {
    nav: nav
}

export default Navigation;