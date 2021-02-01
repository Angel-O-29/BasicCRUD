import React from 'react'
import './styles.css'
import CustomersListItem from './CustomersListItems'
import PropTypes from 'prop-types'
import { capitalizeFirstLetter } from '../../helpers/functions';
import {validateLogin} from './../../helpers/validateLogin'
 
function CustomersList({customers, urlPath}) {
    return (
        <div className='setScroll'>

            <table className="table customersListCont">
                <thead>
                    <tr>
                        <th>Customer</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                {
                    customers.map( c => (
                        <CustomersListItem
                            key={c.dni}
                            dni={c.dni}
                            name={capitalizeFirstLetter(c.name) }
                            urlPath={urlPath}
                            editAction='edit'
                            delAction='delete' 
                        />
                    ))
                }
                </tbody>

                <tfoot style={{display: 'none'}}>
                    <tr>
                        <th>Customer</th>
                        <th>Actions</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

CustomersList.propTypes = {
    customers: PropTypes.array.isRequired,
    urlPath: PropTypes.string,
}

export default validateLogin(CustomersList)

