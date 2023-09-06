import s from './InputPlusMinus.module.scss'
import {ChangeEvent} from "react/ts5.0";

const InputPlusMinus = ({onClickPlus, onClickMinus, value, onChange}:
                            {
                                onClickPlus: () => void,
                                onClickMinus: () => void,
                                value: number,
                                onChange: (e:ChangeEvent<HTMLInputElement>) => void
                            }) => {
    return (
        <div className={s.wrapper}>
            <button className={s.plusMinus} onClick={onClickMinus}>-</button>
            <input type="number" className={s.num} value={value} onChange={onChange}/>
            <button className={s.plusMinus} onClick={onClickPlus}>+</button>
        </div>
    );
};

export default InputPlusMinus;