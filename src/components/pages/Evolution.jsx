import React from 'react';

function Evolution(props) {
  const pages = {
    course: 'Курсы',
    test: 'Тесты',
    progress: 'Достижения',
    lectern: 'Кафедра',
    history: 'История',
    rating: 'Рейтинг',
    mysalesteam: 'Мой отдел продаж',
    storebonus: 'Магазин бонусов',
  };

  return (
    <div className="page-cover">
      <div className="center align_center ps_rel">

        <svg className="page-cover__dots1" width="190" height="130" viewBox="0 0 190 130">
          <g fill="#4DA1FF" fillRule="evenodd">
            <circle cx="95" cy="125" r="5" />
            <circle cx="65" cy="125" r="5" />
            <circle cx="35" cy="125" r="5" />
            <circle cx="95" cy="95" r="5" />
            <circle cx="65" cy="95" r="5" />
            <circle cx="35" cy="95" r="5" />
            <circle cx="125" cy="65" r="5" />
            <circle cx="155" cy="65" r="5" />
            <circle cx="185" cy="65" r="5" />
            <circle cx="95" cy="65" r="5" />
            <circle cx="65" cy="65" r="5" />
            <circle cx="35" cy="65" r="5" />
            <circle cx="125" cy="35" r="5" />
            <circle cx="155" cy="35" r="5" />
            <circle cx="185" cy="35" r="5" />
            <circle cx="95" cy="35" r="5" />
            <circle cx="65" cy="35" r="5" />
            <circle cx="35" cy="35" r="5" />
            <circle cx="5" cy="35" r="5" />
            <circle cx="125" cy="5" r="5" />
            <circle cx="155" cy="5" r="5" />
            <circle cx="185" cy="5" r="5" />
            <circle cx="95" cy="5" r="5" />
            <circle cx="65" cy="5" r="5" />
            <circle cx="35" cy="5" r="5" />
            <circle cx="5" cy="5" r="5" />
          </g>
        </svg>

        <svg className="page-cover__dots2" width="190" height="70" viewBox="0 0 190 70">
          <g fill="#4DA1FF" fillRule="evenodd">
            <circle cx="125" cy="65" r="5" />
            <circle cx="185" cy="65" r="5" />
            <circle cx="95" cy="65" r="5" />
            <circle cx="65" cy="65" r="5" />
            <circle cx="35" cy="65" r="5" />
            <circle cx="95" cy="35" r="5" />
            <circle cx="65" cy="35" r="5" />
            <circle cx="35" cy="35" r="5" />
            <circle cx="5" cy="35" r="5" />
            <circle cx="95" cy="5" r="5" />
            <circle cx="65" cy="5" r="5" />
            <circle cx="35" cy="5" r="5" />
            <circle cx="5" cy="5" r="5" />
          </g>
        </svg>


        <div className="mb_36">
          <svg width="120" height="113" viewBox="0 0 120 113">
            <path
              fill="#E1E5E9"
              d="M112.5 18.883c2.031 0 3.79.742 5.273 2.226 1.485 1.485 2.227 3.243 2.227 5.274v78.75c0 2.031-.742 3.789-2.227 5.273-1.484 1.485-3.242 2.227-5.273 2.227H7.5c-2.031 0-3.79-.742-5.273-2.227C.742 108.922 0 107.164 0 105.133v-78.75c0-2.031.742-3.79 2.227-5.274 1.484-1.484 3.242-2.226 5.273-2.226h30v-7.266c0-3.047 1.094-5.683 3.281-7.91C42.97 1.48 45.625.367 48.75.367h22.5c3.125 0 5.781 1.113 7.969 3.34 2.187 2.227 3.281 4.863 3.281 7.91v7.266h30zM45 11.617v7.266h30v-7.266a3.705 3.705 0 0 0-1.055-2.637c-.703-.742-1.601-1.113-2.695-1.113h-22.5c-1.016 0-1.895.371-2.637 1.113-.742.743-1.113 1.622-1.113 2.637zM7.5 26.383V52.75h41.25v-3.867c0-2.031.723-3.79 2.168-5.274 1.445-1.484 3.223-2.226 5.332-2.226h7.5c2.031 0 3.79.742 5.273 2.226 1.485 1.485 2.227 3.243 2.227 5.274v3.867h41.25V26.383H7.5zM63.75 67.75V48.883h-7.5V67.75h7.5zM7.5 105.133h105V60.25H71.25v7.5c0 2.11-.742 3.887-2.227 5.332-1.484 1.445-3.242 2.168-5.273 2.168h-7.5c-2.11 0-3.887-.723-5.332-2.168-1.445-1.445-2.168-3.223-2.168-5.332v-7.5H7.5v44.883z"
            />
          </svg>
        </div>
        <div className="h1 mb_12" style={{ fontSize: 46 }}>
          {pages[props.params.page]}
        </div>
        <div className="fz_18">Страница в разработке</div>
      </div>
    </div>
  );
}

export default Evolution;
