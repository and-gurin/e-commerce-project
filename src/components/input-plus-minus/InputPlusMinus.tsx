import s from './InputPlusMinus.module.scss'

const InputPlusMinus = ({onClickPlus, onClickMinus, value}:
                            {
                                onClickPlus: () => void,
                                onClickMinus: () => void,
                                value: number
                            }) => {
    return (
        <div className={s.wrapper}>
            <button className={s.plusMinus} onClick={onClickMinus}>-</button>
            <input type="number" className={s.num} value={value}/>
            <button className={s.plusMinus} onClick={onClickPlus}>+</button>
        </div>
    );
};

export default InputPlusMinus;