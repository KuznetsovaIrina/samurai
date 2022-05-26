import React, {Fragment} from 'react';
import s from './UserInfo.module.css';

const UserInfo = () => {
    return (
      <Fragment>
        <figure className={s.intro}>
          <img width="140" src="https://avatars.mds.yandex.net/i?id=61cabaa529af9c22f1217a68d0cfcc37-5332625-images-thumbs&n=13" alt="" />
          <figcaption>
            <span className={s.name}>Irina K.</span>
            <ul>
              <li>Тотемные животные: <b>Кошки и Совы</b></li>
              <li>Я люблю: <b>Дзогчен и Будду</b></li>
              <li>Любимая фраза: <b>Баба Нам Кевалам</b></li>
            </ul>
          </figcaption>
        </figure>
        <hr />
      </Fragment>
    );
}

export default UserInfo;