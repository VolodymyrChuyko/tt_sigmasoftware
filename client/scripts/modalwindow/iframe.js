import setStyles from '../setstyles.js';

export default function createIframe() {
  const iframe = document.createElement('iframe');
  const iframeStyles = {
    display: 'block',
    width: '900px',
    height: '500px',
    border: 'none',
    padding: '12px 0',
  };

  iframe.setAttribute('title', 'Ad slots statistic');
  iframe.setAttribute('id', 'Ad_slots_statistic');
  setStyles(iframe, iframeStyles);

  return iframe;
}
