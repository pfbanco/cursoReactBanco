import Proptypes from 'prop-types'
import './Layout'

const Layout = ({children}) => {
    return(
        <div className='layout'>{children}</div>
    )
}

Layout.proptype = {
    children: Proptypes.element.inRequired
}

export default Layout