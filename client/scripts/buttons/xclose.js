import setStyles from '../helpers.js';

export default function createXcloseButton() {
  const buttonContainer = document.createElement('div');
  const button = document.createElement('button');
  const buttonContainerStyles = {
    display: 'flex',
    'justify-content': 'right',
    border: '0px',
  };
  const buttonStyles = {
    height: '40px',
    width: '40px',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '18px',
    color: '#000',
    fontWeight: 'bold',
    lineheight: '1',
    backgroundColor: '#fa0',
    border: '0px',
    borderRadius: '10px',
    transition: '0.3s',
    outline: 'none',
  };

  button.setAttribute('type', 'button');
  button.textContent = 'X';
  setStyles(buttonContainer, buttonContainerStyles);
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

  buttonContainer.append(button);

  return buttonContainer;
}
