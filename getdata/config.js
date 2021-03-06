module.exports = {
    /////////////////////////////////////////////////////////////////////////
    symbol: 'ETHUSDT',
    timeframe:'5m',
    fromTS:'09/05/2021 23:00:00',//Format - mm/dd/yyyy hh:mm:ss;
    toTS:'09/06/2021 09:00:00',//Format - mm/dd/yyyy hh:mm:ss;
    fileName:'ETHUSDT_5m_10h.csv',//Export to file name.csv
    ///////////////////////////////////////////////////////////////////////////
    tfw:{
      '1m':1*60*1000,
      '3m':3*60*1000,
      '5m':5*60*1000,
      '15m':15*60*1000,
      '30m':30*60*1000,
      '1h':1*60*60*1000,
      '2h':2*60*60*1000,
      '4h':4*60*60*1000,
      '8h':8*60*60*1000,
      '12h':12*60*60*1000,
      '1d':1*24*60*60*1000,
      '3d':3*24*60*60*1000,
      '1w':7*24*60*60*1000,
      '1M':30*24*60*60*1000,
    },
    getPrameters(){
      return {  symbol:this.symbol,
                timeframe:this.timeframe,
                fromTS:new Date().getTime() - 36000000,
                toTS:new Date().getTime(),
                fileName:this.fileName,
                tfw:this.tfw}
    }
  }