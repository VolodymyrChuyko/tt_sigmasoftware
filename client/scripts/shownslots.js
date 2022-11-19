import createTable from './table.js';

export default function prepareShownSlotsInfo(winningBids) {
  const shownSlotsInfo = document.createElement('div');
  const tableTitle = document.createElement('h1');
  const tableRows = prepareShownSlotsTableData(winningBids);
  const table = createTable(tableRows);

  tableTitle.textContent = 'Shown ad slots';
  shownSlotsInfo.append(tableTitle);
  shownSlotsInfo.append(table);

  return shownSlotsInfo;
}

function prepareShownSlotsTableData(winningBids) {
  const tableHeaders = ['Bidder name', 'CPM', 'Currency', 'Size'];

  return [
    tableHeaders,
    ...winningBids.map((winningBid) => [
      winningBid.bidder,
      winningBid.cpm,
      winningBid.currency,
      winningBid.size,
    ]),
  ];
}
