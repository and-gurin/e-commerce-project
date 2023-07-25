import {Link} from "react-router-dom";
import logo from '../../assets/svg/logo.svg'

const Logo = () => {
    return (
        <Link  to={'/'}>
            <img
                 src={logo}
                 width='185px'
                 height='41px'
                 alt="logo"/>
        </Link>
    );
};

export default Logo;