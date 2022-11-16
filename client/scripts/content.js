import setStyles from './helpers.js';

export default function createContainer() {
  const container = document.createElement('div');
  const containerStyles = {
    width: 'max-content',
    margin: 'auto',
    padding: '12px',
    backgroundColor: '#f0f0f2',
    borderRadius: '24px',
    overflow: 'hidden',
  };

  setStyles(container, containerStyles);

  return container;
}
