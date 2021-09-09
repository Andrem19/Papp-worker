const fs = require('fs');
const csvtojson = require('csvtojson')

exports.toJson = async () => {
const csvfilepath = "bull.csv"

await csvtojson()
.fromFile(csvfilepath)
.then((jsonObj) => {
    
fs.writeFileSync("bull0.json", JSON.stringify(jsonObj), 'utf8',
        function(err){console.log(err)})

})
const dataJson = JSON.parse(fs.readFileSync('bull0.json'))
const filter = async () => {

const newJson = await dataJson.map(item => (
  Math.round(item.Close) /1000
))
let filepath = "/home/andrew/CODE/JS/MACHINE_LEARNING/LSTM/predict_price/Papp-worker/bull/bull1.json"
fs.writeFileSync(filepath, JSON.stringify(newJson), 'utf8')
}
filter()
}