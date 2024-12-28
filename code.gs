function doGet(e) {
  SpreadsheetApp.getActiveSheet().appendRow([e.queryString])
  return ContentService.createTextOutput(
    SpreadsheetApp.getActiveSheet().getRange(
      SpreadsheetApp.getActiveSheet().getLastRow()
      ,2
    ).getValues()
  )
  
}
function doPost(e) {
  const username = e.parameter.username;
  const password = e.parameter.password;
  const isValid = checkCredentials(username, password);
  return ContentService.createTextOutput(JSON.stringify({ success: isValid })).setMimeType(ContentService.MimeType.JSON);
}

function checkCredentials(username, password) {
  const sheet = SpreadsheetApp.openById('1VFRtD9otS8fSjQB5U_stmsfQerWZWQQZf4EMMM5ny1A').getSheetByName('Login');
  const data = sheet.getDataRange().getValues();

  for (let i = 0; i < data.length; i++) {
    if (data[i][0] === username && data[i][1] === password) {
      return true;
    }
  }
  return false;
}