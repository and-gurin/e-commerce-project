import React from 'react';
import style from './Input.module.scss';

const Input = ({disabled, textLabel, caption, error, value, onChangeHandler, placeholderText, width, id}:
                   {
                       disabled?: boolean
                       textLabel: string
                       caption?: string
                       error?: string
                       value?: string
                       onChangeHandler?: () => void
                       placeholderText?: string
                       width?: string
                       id?: string
                   }
) => {

    return (
        <div>

                {textLabel && <label htmlFor={id} className={style.textLabel}>{textLabel}</label>}
            <input value={value}
                   id={id}
                   onChange={onChangeHandler}
                   className={error ? `${style.input} ${style.error}` : style.input}
                   disabled={disabled}
                   placeholder={placeholderText}
                   style={{width: width}}
            />
            {caption ? <div className={style.caption}>Block + primary</div> :
                error ? <div className={style.errorMessage}>Error Message</div> : null}
        </div>
    );
};

export default Input;