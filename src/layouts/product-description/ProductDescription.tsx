import s from './ProductDescription.module.scss';
import firstPhoto from '../../assets/product-description/Cloud sofa three seater + ottoman_1 1.png'
import secondPhoto from '../../assets/product-description/Cloud sofa three seater + ottoman_2 1.png'
import {ChangeEvent} from "react/ts5.0";

type ValuePropsType = {
    paragraph: string
}

type DescriptionOptionsPropsType = {
    value: ValuePropsType[]
    id: string
    title: string
}

const ProductDescription = ({options, value, onChange}:
                                {
                                    options: DescriptionOptionsPropsType[],
                                    value: string,
                                    onChange: (e: ChangeEvent<HTMLInputElement>) => void}) => {
    const description = options.find(option => option.id === value).value[0].paragraph
    console.log(description)
    return (
        <>
            <div className={s.radioWrapper}>
                {options.map((option) =>
                    <label key={option.id} htmlFor={option.id} className={s.radioLabel}>
                        <input
                            type="radio"
                            className={s.radioInput}
                            name={option.id}
                            id={option.id}
                            value={option.id}
                            onChange={onChange}
                            checked={option.id == value}
                        />
                        <span className={s.customRadio}>
                        {option.title && option.title}
                    </span>
                    </label>
                )}
            </div>
            <div className={s.descriptionWrapper}>
                <p className={s.description}>
                    {options.find(option => option.id === value).value[0].paragraph}
                </p>
                <p className={s.description}>
                    {options.find(option => option.id === value).value[1].paragraph}
                </p>
            </div>
            <div className={s.imgWrapper}>
                <div className={s.figure}>
                    <img src={firstPhoto} width='605px' height='384px' alt="description-photo"/>
                </div>
                <div className={s.figure}>
                    <img src={secondPhoto} width='605px' height='384px' alt="description-photo"/>
                </div>
            </div>
        </>
    );
};

export default ProductDescription;