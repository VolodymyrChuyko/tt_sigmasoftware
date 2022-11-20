import createPopupButton from './scripts/buttons/showpopup.js';
import createModal from './scripts/modalwindow/modal.js';
import prepareInitSlotsInfo from './scripts/tables/initslotsinfo.js';
import prepareShownSlotsInfo from './scripts/tables/shownslotsinfo.js';
import initInterceptor from './scripts/interception/interceptor.js';

initInterceptor();

window.addEventListener('load', () => {
  console.log('SCRIPT: detecting Prebid.js...', !!window['_pbjsGlobals']);

  if (window['_pbjsGlobals'] && window.googletag) {
    const prebidLib = window['_pbjsGlobals'][0];
    const { adUnits, getAllWinningBids, getAllPrebidWinningBids }
      = window[prebidLib];
    const gptSlots = window.googletag.pubads().getSlots();

    console.log('SCRIPT: pbjs object', window[prebidLib]);
    console.log('SCRIPT: Ad Units', ...adUnits);

    console.log(
      'SCRIPT: slots',
      gptSlots.map((slot) => slot.getAdUnitPath()),
    );

    console.log(
      'SCRIPT: slots',
      gptSlots.map((slot) => slot.getSlotElementId()),
    );

    const body = document.querySelector('body');
    const button = createPopupButton();
    const modal = createModal();

    body.append(button);
    body.append(modal);

    const adStatsFrame = document.querySelector('#Ad_slots_statistic');
    const initSlotsInfo = prepareInitSlotsInfo(adUnits, gptSlots);

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
