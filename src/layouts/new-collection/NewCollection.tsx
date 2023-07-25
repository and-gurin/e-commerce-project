import s from './NewCollection.module.scss'

const NewCollection = () => {
    return (
        <section className={s.wrapper}>
            <div className={s.promo}>
                <p className={s.superTitle}>
                    New Arrival
                </p>
                <h1 className={s.title}>
                    Discover Our<br/>New Collection
                </h1>
                <p className={s.subtitle}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut<br/>
                    elit tellus, luctus nec ullamcorper mattis.
                </p>
                <button className={s.button}>
                    Buy now
                </button>
            </div>
        </section>
    );
};

export default NewCollection;