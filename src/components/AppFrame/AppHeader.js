import React from 'react'
import PropTypes from 'prop-types'

const AppHeader = ({headerName}) => (
    <header>
        <h1>{headerName}</h1>
    </header>
)

AppHeader.propTypes = {
    headerName: PropTypes.string.isRequired,
}
export default AppHeader