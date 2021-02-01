export function capitalizeFirstLetter(string) {
    return string && (string.charAt(0).toUpperCase() + string.slice(1));
  }

export const toNumber = value => value && Number(value);
export const tolowercase = value => value && value.toLowerCase()
export const toCapitalize = value => {
    return (value && capitalizeFirstLetter(value))}
export const onlyGrow = (value,previousValue, values) => 
    value && (!previousValue ? value : (value > previousValue ? value : previousValue) )

