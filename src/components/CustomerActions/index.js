import React from 'react'
import './styles.css'
import PropTypes from 'prop-types'

function CustomerActions({children}) {
    return (
        <div className="customerActionsCont">
            {children}
        </div>
    )
}

CustomerActions.propTypes = {
    children: PropTypes.node.isRequired,
}

export default CustomerActions

