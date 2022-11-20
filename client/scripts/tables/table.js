import setStyles from '../setstyles.js';

export default function createTable(tableContent) {
  const table = document.createElement('table');
  const tableStyles = {
    width: '100%',
    padding: '12px 0',
    'border-collapse': 'collapse',
    border: '1px solid',
  };

  setStyles(table, tableStyles);

  const tableRows = createTableRows(tableContent);

  tableRows.forEach((tableRow) => {
    table.append(tableRow);
  });

  return table;
}

function createTableRows(rowsContent) {
  return rowsContent.map((rowContent, index) => {
    const tableRow = document.createElement('tr');

    rowContent.forEach((cellContent) => {
      const cellTag = index === 0 ? 'th' : 'td';
      const cell = document.createElement(cellTag);

      cell.style.border = '1px solid #000';
      cell.style.textAlign = 'left';
      cell.style.padding = '4px';
      cell.textContent = cellContent;

      tableRow.append(cell);
    });

    return tableRow;
  });
}
