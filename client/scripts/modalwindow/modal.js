import setStyles from '../setstyles.js';
import createContainer from './container.js';
import createCloseButton from '../buttons/close.js';
import createXcloseButton from '../buttons/xclose.js';
import createIframe from './iframe.js';

export default function createModal() {
  const container = createContainer();
  const closeButton = createCloseButton();
  const xCloseButton = createXcloseButton();
  const iframe = createIframe();
  const modal = document.createElement('div');
  const modalStyles = {
    display: 'none',
    position: 'fixed',
    'z-index': 999999999999999,
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    'padding-top': '50px',
    overflow: 'auto',
    backgroundColor: 'rgba(0,0,0,0.9)',
  };

  closeButton.onclick = () => {
    modal.style.display = 'none';
  };

  xCloseButton.onclick = () => {
    modal.style.display = 'none';
  };

  setStyles(modal, modalStyles);
  container.append(xCloseButton);
  container.append(iframe);
  container.append(closeButton);

  modal.append(container);

  return modal;
}
