import Utils from "../common/utils";
import Trade from "./objects/trade"

// API Trades static class
export default class ApiTrades {
  // get a list of trades
  static getList() {
    let trade_types = ["Swap", "Put Option", "Call Option", "FX Forward", "Xccy Swap"];
    return new Promise(resolve => {
      setTimeout(() => {
        // build some dummy trades list
        let trades = [];
        for (let x = 1; x <= 45; x++) {
          //mapping trade to a trader id.
          let traderid = x%15 + 1;

          trades.push(
            new Trade(
              x,
              trade_types[Utils.getRandomIntInclusive(0, 4)],
              traderid,
              Utils.getRandomIntInclusive(5, 20)*10,
              "Counerparty " + x*15));
        }
        resolve(trades);
      }, 1000);
    });
  }

  // add/edit a trade
  static addEdit() {
    return new Promise(resolve => {
      setTimeout(() => {
        // do something here
        resolve();
      }, 1000);
    });
  }
}
