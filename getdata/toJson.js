const fs = require('fs');
const csvtojson = require('csvtojson')

exports.toJson = async () => {
const csvfilepath = "ETHUSDT_5m_10h.csv"

await csvtojson()
.fromFile(csvfilepath)
.then((jsonObj) => {
    
fs.writeFileSync("ETHUSDT_checkData.json", JSON.stringify(jsonObj), 'utf8',
        function(err){console.log(err)})

})
const dataJson = JSON.parse(fs.readFileSync('ETHUSDT_checkData.json'))
const filter = async () => {

const newJson = await dataJson.map(item => (
  Math.round(item.Close) /1000
))

  fs.writeFileSync("data_for_check.json", JSON.stringify(newJson), 'utf8')
}
filter()
}