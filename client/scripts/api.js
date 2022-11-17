export default async function sendInterceptedUrl(interceptedUrl) {
  const serverUrl = 'http://localhost:8080/';
  const requestUrl = serverUrl + '?url=' + interceptedUrl;

  try {
    const response = await fetch(requestUrl, { method: 'GET' });
    const json = await response.json();

    return json.data;
  } catch {
    return 'Script: unable to send data to the server';
  }
}
