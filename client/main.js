/* eslint-disable no-undef */
import createPopupButton from './scripts/buttons/showpopup.js';
import createModal from './scripts/modal.js';

console.log('-----------Start script---------');

window.addEventListener('load', () => {
  const body = document.querySelector('body');
  const button = createPopupButton();
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
      <td style="border: 1px solid; text-align: center">1</td>
      <td style="border: 1px solid; text-align: center">2</td>
      <td style="border: 1px solid; text-align: center">3</td>
      <td style="border: 1px solid; text-align: center">4</td>
    </tr>
  </table>
  `;

  try {
    console.log('--------------AFTER LOAD. Ad Units', pbjs.adUnits);

    console.log('Ad unit code:', pbjs.adUnits.map((unit) => unit.code));

    console.log('getAdserverTargetingForAdUnitCode:',
      pbjs.getAdserverTargetingForAdUnitCode(pbjs.adUnits[0].code));

    console.log('getAdserverTargetingForAdUnitCode:',
      pbjs.getAdserverTargetingForAdUnitCode(pbjs.adUnits[0].code));

    console.log('Ad unit bidders:',
      pbjs.adUnits
        .map((unit) => unit.bids
          .map((bid) => bid.bidder)
          .filter((bidder, i, bidders) => bidders.indexOf(bidder) === i)));
  } catch (error) {
    console.log('Prebid.js not found');
  }
});
