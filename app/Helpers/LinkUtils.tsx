const baseURL = process.env.NODE_ENV === 'production'
  ? '/hassall-group-website/'
  : '';

function createPrefixedLink(path: string) {
  return `${baseURL}${path}`;
}

export default createPrefixedLink;
