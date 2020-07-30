import React from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';

import logo from '../../assets_web/logo.png';
import bell from '../../assets_web/bell.png';

function Header({ lateCount, clickNotification }) {
  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="Logo" />
      </S.LeftSide>
      <S.RightSide>
        <Link to='/'>INÍCIO</Link>
        <span className="divider" />
        <Link to='/task'>NOVA TAREFA</Link>
        <span className="divider" />
        <a href="#">SINCRONIZAR CELULAR</a>
        <span className="divider" />
        <button onClick={clickNotification} id="notification">
          <img src={bell} alt="Notificação" />
          <span>{lateCount}</span>
        </button>
      </S.RightSide>
    </S.Container>
  )
}

export default Header;
