import createButton from './scripts/buttons/showpopup.js';
import createModal from './scripts/modal.js';

// eslint-disable-next-line no-console
console.log('-----------Start script---------');

window.addEventListener('load', () => {
  const body = document.querySelector('body');
  const button = createButton();
  const modal = createModal();

  body.append(button);
  body.append(modal);

  button.onclick = () => {
    modal.style.display = 'block';
  };

  const adStatsFrame = document.querySelector('#Ad_slots_statistic');

  adStatsFrame.contentDocument.body.innerHTML = `
  <table style="width: 100%; padding: 12px 0; border-collapse: collapse; border: 1px solid">
    <tr style="border: 1px solid #000">
      <th style="border: 1px solid">1</th>
      <th style="border: 1px solid">2</th>
      <th style="border: 1px solid">3</th>
      <th style="border: 1px solid">4</th>
    </tr>
    </tr>
    <tr style="border: 1px solid #000">
      <td style="border: 1px solid">1</td>
      <td style="border: 1px solid">2</td>
      <td style="border: 1px solid">3</td>
      <td style="border: 1px solid">4</td>
    </tr>
  </table>
  `;
});
