import PropTypes from 'prop-types'
import './NavBar'

const NavBar = ({menus, children}) => {
    return(
        <div className='navbar'>
            <div className='navbar__menus'>
                {
                menus.map((menu) =>{
                    return <a href='#' className='navbar__menu'>{menu}</a>
                })
                }
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

NavBar.prototype = {
    menus: PropTypes.array.isRequired,
    children: PropTypes.element,
}

export default NavBar;