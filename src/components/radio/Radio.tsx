import React from 'react';
import s from './Radio.module.scss'

const Radio = ({value, onChange, options}) => {
    return (
        options.map((option, index) =>
            <label key={index} htmlFor={option.id} className={s.radioLabel}>
                <input
                    type="radio"
                    className={s.radioInput}
                    name={option.id}
                    id={option.id}
                    value={option.id}
                    onChange={onChange}
                    checked={option.id == value}
                />
                <span style={{background: option.value}}
                      className={`${s.customRadio} ${option.id.slice(-4) === 'Size' ? s.size : s.color}`}>
                {option.title && option.title}
            </span>
            </label>
        )
    );
};

export default Radio;