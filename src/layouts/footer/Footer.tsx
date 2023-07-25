import s from './Footer.module.scss'
import Navigation from "../../components/navigation/Nav";

const links = [
    {id: 1, title: 'Home', href: '/'},
    {id: 2, title: 'Shop', href: '/about'},
    {id: 3, title: 'About', href: '/links'},
    {id: 4, title: 'Contact', href: '/'},
]

const help = [
    {id: 1, title: 'Payment options', href: '/'},
    {id: 2, title: 'Returns', href: '/about'},
    {id: 3, title: 'Privacy Policies', href: '/links'},
]

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.wrapper}>
                <div className={s.contacts}>
                    <p className={s.contactsTitle}>
                        Funiro.
                    </p>
                    <address className={s.contactsAddress}>
                        400 University Drive Suite 200 Coral<br/>
                        Gables,<br/>
                        FL 33134 USA
                    </address>
                </div>
                <div className={s.links}>
                    <p className={s.footerTitle}>
                        Links
                    </p>
                    <ul className={s.linksNav}>
                        <Navigation links={links}/>
                    </ul>
                </div>
                <div className={s.help}>
                    <p className={s.footerTitle}>
                        Help
                    </p>
                    <ul className={s.linksNav}>
                        <Navigation links={help}/>
                    </ul>
                </div>
                <div >
                    <p className={s.footerTitle}>
                        Newsletter
                    </p>
                    <form>
                        <input className={s.input} type="text" placeholder='Enter Your Email Address'/>
                        <button className={s.button} type='submit'>
                            Subscribe
                        </button>
                    </form>
                </div>

            </div>
            <div className={s.copyright}>
                2023 funiro. All rights reverved
            </div>
        </footer>
    );
};

export default Footer;