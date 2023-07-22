import React from 'react';
import s from './InputPlusMinus.module.scss'

const InputPlusMinus = ({onClickPlus, onClickMinus, value}) => {
    return (
        <div className={s.wrapper}>
            <button className={s.plusMinus} onClick={onClickPlus}>+</button>
            <input type="number" className={s.num} value={value}/>
            <button className={s.plusMinus} onClick={onClickMinus}>-</button>
        </div>
    );
};

export default InputPlusMinus;