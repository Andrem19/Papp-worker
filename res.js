const tf = require('@tensorflow/tfjs-node')
const fs = require('fs')

let prediction

exports.predict = async () => {

//loading model
const loadingModel = await tf.loadLayersModel('file:///home/andrew/CODE/JS/MACHINE_LEARNING/LSTM/predict_price/Papp-worker/model/model.json');

//loading test data
const dataJson = JSON.parse(fs.readFileSync('data_for_check.json'))

// 4. Make a prediction
const testPredictValue = tf.tensor(dataJson, [1, 120])
const prediction = await loadingModel.predict(testPredictValue).data()


const newData = prediction.map(item => (item.toFixed(3) * 1000))

// const data2 = data.map(item => [item])
// let arr = []
// for (i=0; i<12; i++) {
//    arr.push(data[i])
// }

//console.log(newData);

return newData
}

