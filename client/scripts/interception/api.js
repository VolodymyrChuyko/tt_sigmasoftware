export default async function sendInterceptedUrl(interceptedUrl, nativeFetch) {
  const serverUrl = 'http://localhost:8080/';

  try {
    const response = await nativeFetch(serverUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: interceptedUrl,
    });
    const text = await response.text();

    return 'SCRIPT: ' + text;
  } catch {
    return 'SCRIPT: unable to send data to the server';
  }
}
