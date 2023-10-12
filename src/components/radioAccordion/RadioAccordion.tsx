import s from './RadioAccordion.module.scss'
import React, {ChangeEvent} from 'react';

const RadioAccordion = ({value, onChange, id, title, content}:
                            {
                                value: string,
                                onChange: (e: ChangeEvent<HTMLInputElement>) => void,
                                id: string,
                                title: string,
                                content: string
                            }) => {

    return <>
        <label htmlFor={id} className={s.radioLabel}>
            <input
                type="radio"
                className={s.radioInput}
                name={id}
                id={id}
                value={id}
                onChange={onChange}
                checked={id == value}
            />
            <span className={s.customRadio}></span>
            <span className={s.title}>{title}</span>
            <div className={s.content}>{content}</div>
        </label>

    </>
};

export default RadioAccordion;