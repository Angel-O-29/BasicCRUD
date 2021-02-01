import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'
import AppHeader from './AppHeader.js'

const AppFrame = ({headerName, body}) => {

        return (
            <div className='appHeaderCont'>
                <AppHeader headerName={headerName} />
                <div>{body}</div>
                <p>Aplicacion de ejemplo</p>
            </div>
        )
}

AppFrame.propTypes = {
    headerName: PropTypes.string,
    body: PropTypes.element,
}
export default AppFrame 