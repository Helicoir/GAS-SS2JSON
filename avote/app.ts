const getSheet = () => {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  const sheet = spreadsheet.getActiveSheet()
  return sheet
}

const amountOfCells = () => {
  // シートの列に対する要素を全部取得
  const columnAval = getSheet().getRange("A:A").getValues()

  // 取得した要素（空白セル含め1000）から非空白のセルをカウント
  const amount = columnAval.filter(String).length
  Logger.log(columnAval)
  Logger.log(amount)
  return amount
}

function amountOfCell() {
  // シートの列に対する要素を全部取得
  const va = getSheet().getDataRange().getValues()
  for(var i=2; i<4; i++){
    const f = () => {
      for(var j=1; j<va[j].length; j++){
        return {
          "name": va[j]
        }
      }
    }
    return 
  }
}

const items = (order: number) => {
}
// 
//  // 4. for文によるJSONデータの作成
//  for(var i = 2; i <= amount; i++){
//    var container = function(res){
//      return { res }
//    }
//    // Ⅰ. インスタンス作成
//    class items {
//      
//    }
//    // Ⅱ. インスタンスへの実データ挿入
//    // for(var j = 1; j <= 3; j++){
//    // 
//    // }
//    // Ⅲ. 繰り返し
//}


