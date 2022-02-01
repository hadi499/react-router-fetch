import { Link } from 'react-router-dom';

const Nav = () => {
    const navStyle = {
        color: "white"
    }
    return (
        <nav>
            <h3>Logo</h3>
            <ul className="nav-link">
                <Link style={navStyle} to='/'>
                    <li>home</li>
                </Link>
                <Link style={navStyle} to='/about'>
                    <li>about</li>
                </Link>
                <Link style={navStyle} to='/shop'>
                    <li>shop</li>
                </Link>
            </ul>
        </nav>
    )
}
export default Nav;