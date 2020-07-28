import React from 'react';
import * as S from './styles';

import filter from '../../assets_web/filter.png';

function FilterCard({title, actived}){
    return (
        <S.Container actived={actived}>
            <img src={filter} alt="filtro" />
            <span>{title}</span>
        </S.Container>
    )
}

export default FilterCard;