import setStyles from '../helpers.js';

export default function createPopupButton() {
  const button = document.createElement('button');
  const buttonStyles = {
    position: 'fixed',
    'z-index': 999999999999999,
    bottom: '10px',
    right: '10px',
    height: '100px',
    width: '100px',
    padding: '1px 6px',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '18px',
    color: '#000',
    fontWeight: 'bold',
    lineHeight: '1',
    backgroundColor: '#fa0',
    border: '0px',
    borderRadius: '50%',
    transition: '0.3s',
    outline: 'none',
    whiteSpace: 'normal',
  };

  button.setAttribute('type', 'button');
  button.textContent = 'SHOW POPUP';
  setStyles(button, buttonStyles);

  button.onmouseover = () => {
    const hoverStyles = {
      backgroundColor: '#f80',
      cursor: 'pointer',
    };

    setStyles(button, hoverStyles);
  };

  button.onmouseleave = () => {
    const resetHoverStyles = {
      backgroundColor: '#fa0',
    };

    setStyles(button, resetHoverStyles);
  };

  button.onmousedown = () => {
    const pressedStyles = {
      backgroundColor: '#c60',
    };

    setStyles(button, pressedStyles);
  };

  button.onmouseup = () => {
    const resetPressedStyles = {
      backgroundColor: '#f80',
    };

    setStyles(button, resetPressedStyles);
  };

  return button;
}
