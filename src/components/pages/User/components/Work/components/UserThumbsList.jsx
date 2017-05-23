import React, { Component } from "react";
import { hostUrl } from 'utils/urls.js';
import Icon from "components/Icon";

class UserThumbsList extends Component {

    constructor(props){
        super(props);
        this.state = {
            trigger:false,
        }
    };

    filterThumbs = (arr) => {

        return arr.filter((item, ind)=>{

            if(!this.state.trigger){
                if(ind < 8) return item;
                return false;
            }
            return item;
        });
    };

    triggerThumbs = () => {
        this.setState({"trigger": !this.state.trigger});
    };

    render(){

        let { data } = this.props;
        let thumbs = this.filterThumbs(data);

        return(
            <div className="user-thumbs">

                <div className="profile__label user-thumbs__label">{this.props.title}</div>

                <div className="user-thumbs__list">
                    {
                        thumbs.map((item, ind)=>{
                            return(
                                <div key={`user-thumb-${item.ID}`}  className="user-thumbs__thumb user-thumb"
                                     style={item.PERSONAL_PHOTO_TEXT_86x86 && {backgroundImage:"url("+hostUrl+item.PERSONAL_PHOTO_TEXT_86x86+")"}} >

                                    {!!item.PERSONAL_PHOTO_TEXT_86x86 || <Icon className="user-thumb__default-pic" icon="team" width="26" height="22" />}

                                    <div className="thumb-tooltip user-thumb__tooltip">
                                        <div className="thumb-tooltip__paragraph">{item.NAME +" "+ item.LAST_NAME}</div>
                                        <div className="thumb-tooltip__paragraph">{item.WORK_PHONE}</div>
                                        <div className="thumb-tooltip__paragraph">{item.EMAIL}</div>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>

                <span className="user-thumbs__trigger" onClick={this.triggerThumbs}>{this.state.trigger ? "Свернуть" : "Показать всех"}</span>

            </div>
        )
    };
}

export default UserThumbsList;