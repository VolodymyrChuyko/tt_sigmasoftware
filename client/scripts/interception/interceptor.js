import sendInterceptedUrl from './api.js';

export default function initInterceptor() {
  const fetchDescriptor = Object.getOwnPropertyDescriptor(window, 'fetch');
  const nativeFetch = fetchDescriptor.value;
  const customFetch = async(...args) => {
    const [request] = args;
    const requestUrl = request.slice(0, request.indexOf('?'));

    sendInterceptedUrl(requestUrl, nativeFetch);

    const response = await nativeFetch(...args);

    return response;
  };

  fetchDescriptor.value = customFetch;
  Object.defineProperty(window, 'fetch', fetchDescriptor);
}
