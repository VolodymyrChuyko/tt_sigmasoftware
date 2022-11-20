import createPopupButton from './buttons/showpopup.js';
import createModal from './modalwindow/modal.js';
import prepareInitSlotsInfo from './tables/initslotsinfo.js';
import prepareShownSlotsInfo from './tables/shownslotsinfo.js';

export default function initAdStats() {
  window.addEventListener('load', () => {
    if (window['_pbjsGlobals'] && window.googletag) {
      const prebidLib = window['_pbjsGlobals'][0];
      const { adUnits, getAllWinningBids } = window[prebidLib];
      const gptSlots = window.googletag.pubads().getSlots();
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
      };
    }
  });
}
