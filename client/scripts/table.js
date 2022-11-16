import setStyles from './helpers.js';

export function createTable(tableRows) {
  const table = document.createElement('table');
  const tableStyles = {
    width: '100%',
    padding: '12px 0',
    'border-collapse': 'collapse',
    border: '1px solid',
  };

  setStyles(table, tableStyles);

  tableRows.forEach((tableRow) => {
    table.append(tableRow);
  });

  return table;
}

export function createTableRow(rowCellsContent, cellTag) {
  const tableRow = document.createElement('table');

  rowCellsContent.forEach((cellContent) => {
    const cell = document.createElement(cellTag);

    cell.style.border = '1px solid #000';
    cell.style.textAlign = 'center';
    cell.textContent = cellContent;

    tableRow.append(cell);
  });

  return tableRow;
}
