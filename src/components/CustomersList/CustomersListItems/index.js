import React from 'react'
import './styles.css'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

function CustomersListItem({name, dni, editAction, delAction, urlPath}) {
    return (
            <tr className='customerListItemCont'> 
                <td className="fild">
                    <Link to={`${urlPath}${dni}`} >{name}</Link>
                </td>
                
                <td className="fild actions">
                    <Link to={`${urlPath}${dni}/edit`}>{editAction}  </Link> 

                    <Link to={`${urlPath}${dni}/del`}>{delAction}</Link>
                </td>
            </tr>
    )
}

CustomersListItem.propTypes = {
    name: PropTypes.string.isRequired,
    dni: PropTypes.number.isRequired,
    editAction: PropTypes.string.isRequired,
    delAction: PropTypes.string.isRequired,
    urlPath: PropTypes.string.isRequired
}

export default CustomersListItem

