import createPopupButton from './scripts/buttons/showpopup.js';
import createModal from './scripts/modal.js';
import prepareInitSlotsInfo from './scripts/initslotsinfo.js';
import prepareShownSlotsInfo from './scripts/shownslots.js';
import initInterceptor from './scripts/interceptor.js';

initInterceptor();

window.addEventListener('load', () => {
  console.log('SCRIPT: detecting Prebid.js...', !!window['_pbjsGlobals']);

  if (window['_pbjsGlobals']) {
    const prebidLib = window['_pbjsGlobals'][0];
    const { adUnits, getAllWinningBids, getAllPrebidWinningBids }
      = window[prebidLib];

    console.log('SCRIPT: pbjs object', window[prebidLib]);
    console.log('SCRIPT: Ad Units', ...adUnits);

    const body = document.querySelector('body');
    const button = createPopupButton();
    const modal = createModal();

    body.append(button);
    body.append(modal);

    const adStatsFrame = document.querySelector('#Ad_slots_statistic');
    const initSlotsInfo = prepareInitSlotsInfo(adUnits);

    adStatsFrame.contentDocument.body.append(initSlotsInfo);

    button.onclick = () => {
      const shownSlotsInfo = prepareShownSlotsInfo(getAllWinningBids());

      if (adStatsFrame.contentDocument.body.children.length > 1) {
        adStatsFrame.contentDocument.body.lastChild.remove();
      }
      adStatsFrame.contentDocument.body.append(shownSlotsInfo);
      modal.style.display = 'block';
      // ==================================================== test logs start
      console.log('pbjs.getAllWinningBids():', getAllWinningBids());

      console.log('pbjs.getAllPrebidWinningBids():', getAllPrebidWinningBids());
      // ==================================================== test logs end
    };
  }
});
