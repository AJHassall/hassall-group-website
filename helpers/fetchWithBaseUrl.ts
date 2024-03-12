export default function fetchWithBaseUrl(path: string) {
  const url = process.env.pathPrefix + path;

  return fetch(url);
}
