

export const getCustomers = state => state.customers;
export const getUsers = state => state.users;
export const getCustomerByDni = (state, dni) => state.customers.find(c => (c.dni === parseInt(dni)))
