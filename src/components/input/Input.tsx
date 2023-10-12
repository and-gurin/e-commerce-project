import React from 'react';
import style from './Input.module.scss';

const Input = ({disabled, textLabel, caption, error, value, onChangeHandler, placeholderText, width, id, icon, height}:
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
                       icon?: boolean
                       height?: string
                   }
) => {

    const finalClassName = icon ? `${style.input} ${style.icon}` : style.input

    return (
        <div>

                {textLabel && <label htmlFor={id} className={style.textLabel}>{textLabel}</label>}
            <input value={value}
                   id={id}
                   onChange={onChangeHandler}
                   className={error ? `${finalClassName} ${style.error}` : finalClassName}
                   disabled={disabled}
                   placeholder={placeholderText}
                   style={{width: width, height: height}}
            />
            {caption ? <div className={style.caption}>Block + primary</div> :
                error ? <div className={style.errorMessage}>Error Message</div> : null}
        </div>
    );
};

export default Input;