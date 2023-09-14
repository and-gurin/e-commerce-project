import React from 'react';
import style from './Select.module.scss';

export type OptionsType = {
    id: number
    value: string | number
}

const Select = ({disabled, textLabel, options, value, onChangeHandler, placeholderText, width, id}:
                   {
                       disabled?: boolean
                       textLabel: string
                       options?: OptionsType[]
                       error?: string
                       value?: string
                       onChangeHandler?: () => void
                       placeholderText?: string
                       width?: string
                       id?: string
                   }
) => {

    const mappedOptions: any[] = options
        ? options.map((o) => (
            <option
                className={style.option}
                key={o.id}
                value={o.value}
            >
                {o.value}
            </option>
        ))
        : []

    return (
        <div>
                {textLabel && <label htmlFor={id} className={style.textLabel}>{textLabel}</label>}
            <select value={value}
                   id={id}
                   onChange={onChangeHandler}
                   className={style.select}
                   disabled={disabled}
                   placeholder={placeholderText}
                   style={{width: width}}
            >
            {mappedOptions}
        </select>
        </div>
    );
};

export default Select;