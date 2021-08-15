/**
 * Function to create a string for query params from an object
 */
function toStringQueryParams(params: Object) {
  const keys = Object.keys(params);
  // @ts-ignore
  const queryStringArray = keys.map(key => `${key}=${params[key]}`);
  return `?${queryStringArray.join('&')}`;
}

export default toStringQueryParams;
