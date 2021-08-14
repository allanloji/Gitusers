/**
 * toStringQueryParams
 */
function toStringQueryParams(params = {}) {
  const keys = Object.keys(params);
  // @ts-ignore
  const queryStringArray = keys.map(key => `${key}=${params[key]}`);
  return `?${queryStringArray.join('&')}`;
}

export default toStringQueryParams;
