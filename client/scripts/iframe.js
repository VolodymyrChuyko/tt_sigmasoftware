import setStyles from './helpers.js';

export default function createIframe() {
  const iframe = document.createElement('iframe');
  const iframeStyles = {
    display: 'block',
    width: '900px',
    height: '500px',
    border: 'none',
  };

  iframe.setAttribute('title', 'Ad slots statistic');
  iframe.setAttribute('id', 'Ad_slots_statistic');
  setStyles(iframe, iframeStyles);

  return iframe;
}
