export default async function sendInterceptedUrl(interceptedUrl, nativeFetch) {
  const serverUrl = 'http://localhost:8080/';
  const data = { url: interceptedUrl };

  try {
    const response = await nativeFetch(serverUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();

    return 'SCRIPT: ' + json.data;
  } catch {
    return 'SCRIPT: unable to send data to the server';
  }
}
