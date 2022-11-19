import createTable from './table.js';

export default function prepareInitSlotsInfo(adUnits) {
  const initSlotsInfo = document.createElement('div');
  const tableTitle = document.createElement('h1');
  const tableRows = prepareInitSlotsTableData(adUnits);
  const table = createTable(tableRows);

  tableTitle.textContent = 'Initial ad slots configuration';
  initSlotsInfo.append(tableTitle);
  initSlotsInfo.append(table);

  return initSlotsInfo;
}

function prepareInitSlotsTableData(adUnits) {
  const tableHeaders = ['adUnit code', 'Bidders', 'Sizes'];

  return [
    tableHeaders,
    ...adUnits.map((unit) => [unit.code, getBidders(unit), getSizes(unit)]),
  ];
}

function getBidders(adUnit) {
  return adUnit.bids
    .map((bid) => bid.bidder)
    .filter((bidder, i, bidders) => bidders.indexOf(bidder) === i)
    .join(', ');
}

function getSizes(adUnit) {
  if (Object.prototype.hasOwnProperty.call(adUnit.mediaTypes, 'banner')) {
    return adUnit.mediaTypes.banner.sizes
      .map((size) => size.join('x'))
      .join(', ');
  }

  if (Object.prototype.hasOwnProperty.call(adUnit.mediaTypes, 'video')) {
    return adUnit.mediaTypes.video.playerSize.join('x');
  }
}
