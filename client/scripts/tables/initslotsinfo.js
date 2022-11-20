import createTable from './table.js';

export default function prepareInitSlotsInfo(adUnits, slots) {
  const initSlotsInfo = document.createElement('div');
  const tableTitle = document.createElement('h1');
  const tableRows = prepareInitSlotsTableData(adUnits, slots);
  const table = createTable(tableRows);

  tableTitle.textContent = 'Initial ad slots configuration';
  initSlotsInfo.append(tableTitle);
  initSlotsInfo.append(table);

  return initSlotsInfo;
}

function prepareInitSlotsTableData(adUnits, slots) {
  const tableHeaders = ['adUnit code', 'Bidders', 'Sizes', 'adUnit path'];
  const paths = getPaths(slots);

  return [
    tableHeaders,
    ...adUnits.map((unit) => [
      unit.code,
      getBidders(unit),
      getSizes(unit),
      paths[unit.code],
    ]),
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

function getPaths(slots) {
  const pathsOfUnits = slots.reduce(
    (paths, slot) => ({
      ...paths,
      [slot.getSlotElementId()]: slot.getAdUnitPath(),
    }),
    {},
  );

  return pathsOfUnits;
}
