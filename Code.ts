const getData = (sheetName) => {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  const sheet = spreadsheet.getActiveSheet()
  const rows = sheet.getDataRange().getValues();
  const keys = rows.splice(0, 1)[0];
  return rows.map(function(row) {
    const obj = {};
    row.map(function(item, index) {
      obj[String(keys[index])] = String(item);
    });
    return obj;
  });
}

function doGet() {
  const data = getData('Sheet1');
  return ContentService.createTextOutput(JSON.stringify(data, null, 2))
  .setMimeType(ContentService.MimeType.JSON);
}